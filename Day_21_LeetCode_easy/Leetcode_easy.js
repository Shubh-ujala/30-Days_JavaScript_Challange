//Day-21 Leetcode easy!
//task 1 Task 1: Solve the "Two Sum" problem on LeetCode.

var twoSum = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]; 
            }
        }
    }
    return [];
}


//task 2 : Reverse number 
function reverseInteger(x) {
    const INT_MIN = (-2) ** 31;
    const INT_MAX = 2 ** 31 - 1;

    
    const sign = x < 0 ? -1 : 1;
   
    x = Math.abs(x);

   
    let reversed = 0;
    while (x > 0) {
        const digit = x % 10;
        x = Math.floor(x / 10);
        reversed = reversed * 10 + digit;
    }

    return reversed * sign;
}

// Test cases
const testCases = [18923, -9000123, 908120, 0, 1534236469, -1534, 1000000001,900];
testCases.forEach(testCase => {
    console.log(`Input: ${testCase}, Reversed: ${reverseInteger(testCase)}`);
});


//Task 3 palindrom 
function isPalindrome(x) {
    
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    const str = x.toString();

    function isPalindrome(left, right) {
        if (left >= right) {
            return true;
        }
        if (str[left] !== str[right]) {
            return false;
        }
      
        return isPalindrome(left + 1, right - 1);
    }

    
    return isPalindrome(0, str.length - 1);
}

// Test cases
const testCase = [121, -1211211, 10, 1001, 12321, 123456, 1221];
testCase.forEach(testCase => {
    console.log(`Input: ${testCase}, Is Palindrome: ${isPalindrome(testCase)}`);
});

//task 4 merge two sorted lists(done this in java!)
function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy; 

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

        if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }

    return dummy.next; 
}


function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}


function printLinkedList(head) {
    let result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}


// task 5 valid parenthesis!(done this in java)
function isValid(s) {
    // Mapping of closing brackets to opening brackets
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Stack to keep track of opening brackets
    let stack = [];

    for (let char of s) {
        if (char in matchingBrackets) {
            // If current character is a closing bracket
            const topElement = stack.length === 0 ? '#' : stack.pop();
            if (matchingBrackets[char] !== topElement) {
                return false;
            }
        } else {
            // If current character is an opening bracket
            stack.push(char);
        }
    }

    // If stack is empty, all brackets are matched correctly
    return stack.length === 0;
}

// Test cases
const testCases1 = [
    { input: "()", expected: true },
    { input: "()[]{}", expected: true },
    { input: "(]", expected: false },
    { input: "([)]", expected: false },
    { input: "{[]}", expected: true },
    { input: "", expected: true }, // Edge case: empty string
    { input: "(", expected: false } // Edge case: unbalanced single opening bracket
];

testCases1.forEach(({ input, expected }) => {
    console.log(`Input: "${input}", Expected: ${expected}, Result: ${isValid(input)}`);
});
