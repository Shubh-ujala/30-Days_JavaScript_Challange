/***** Day-16: Recursion*****/

//Activity 1: Basic Recursion✅

//Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

const factorial = function ( N ){
    if(N==0 || N==1){
        return 1;
    }
    let x = factorial(N-1);
    return x*N;
}

console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(2));
console.log(factorial(5));

console.log(`\n<---Task 1 ended--->\n`);
//Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

//fibo numbers = 0 ,1,1,2,3,5,8,13...

const fibo = function(N){
    if(N==0 ||N==1){
        return N;
    }
    let x = fibo(N-1);
    let y = fibo(N-2);
    return x+y;
}
console.log(fibo(3));
console.log(fibo(1));
console.log(fibo(8));
console.log(fibo(0));
console.log(fibo(1));

console.log(`\n<---Task 2 ended--->\n`);

//Activity 2: Recursion with Arrays

//Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

const arr = [2,3,4,5,6];
let length = arr.length;
const sum = function(idx){
    if(idx==0){
        return arr[0];
    }
    let x = sum(idx-1);
    return x + arr[idx];
}
console.log(sum(3));
console.log(sum(2));
console.log(sum(1));
console.log(sum(length-1));

console.log(`\n<---Task 3 ended--->\n`);


//Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

const arr1 = [4,5,6,9,0,-1];
const arr2 = [-1,-3,9,99,87,100];
const arr3 = [0,0,0];
const max = function(arr,n){
    if(n===1){
        return arr[0];
    }

    let x = max(arr,n-1);
    return Math.max(arr[n-1],x);
}
console.log(max(arr1,arr1.length));
console.log(max(arr2,arr2.length));
console.log(max(arr3,arr3.length));

console.log(`\n<---Task 4 ended--->\n`);

//Activity 3: String Manipulation with Recursion

//Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.



function reverseString(str) {
    
    if (str.length <= 1) {
        return str;
    }
    
    let st = reverseString(str.substring(1));
    return st + str.charAt(0);
}

console.log(reverseString("shubh"));
console.log(reverseString("swyam"));

console.log(`\n<---Task 5 ended--->\n`);

//Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

const isPlalendrom = function(arr,sp,ep){
    if(sp==ep){
        return true;
    }
    if(sp>ep){
        return true;
    }
    if(arr[sp]!=arr[ep]){
        return false;
    }else{
        let temp = isPlalendrom(arr,sp+1,ep-1);
        return temp;
    }
}
let myarr = ["MALAYALAM"];
let charArray = myarr.join('').split('');
let myarr1 = ["Shubh"]
let charArray1 = myarr1.join('').split('');

console.log(isPlalendrom(charArray,0,charArray.length-1));//true
console.log(isPlalendrom(charArray1,0,charArray1.length-1));//false

console.log(`\n<---Task 6 ended--->\n`);

//Activity 4: Recursive Search

//Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases

const binarySearch = function(arr,key,s,e){
    if(s>e){
        return -1;
    }
   let mid = Math.floor(s + (e-s)/2);
   if(arr[mid]==key){
    return mid;
   }
   if(arr[mid]<key){
     return binarySearch(arr,key,mid+1,e);
   }
   return binarySearch(arr,key,s,mid-1);
}

const binaryarray = [2,3,4,5,6,7];
const key1 = 5;
const key2 = 2;
const key3 = 7;
console.log(binarySearch(binaryarray,key1,0,binaryarray.length-1));
console.log(binarySearch(binaryarray,key2,0,binaryarray.length-1));
console.log(binarySearch(binaryarray,key3,0,binaryarray.length-1));

console.log(`\n<---Task 7 ended--->\n`);



//Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.


const count =function(arr,key,index){
    if(index>=arr.length){
        return 0;
    }
    let x = count(arr,key,index+1);
    if(arr[index]==key){
        return 1+x;
    }else{
        return 0+x;
    }
}


let array1 = [3,4,5,5,5,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8];
let mykey1 = 7;
let mykey2 = 5;
let mykey3 = 8;
console.log(count(array1,mykey1,0));
console.log(count(array1,mykey2,0));
console.log(count(array1,mykey3,0));

console.log(`\n<---Task 8 ended--->\n`);


//Activity 5: Tree Traversal (Optional)
//task 9 
const inorder_traversal = 'https://leetcode.com/problems/binary-tree-inorder-traversal/description/'
//done in leetcode!

//task 10
const depth_binary_tree = 'https://leetcode.com/problems/maximum-depth-of-binary-tree/description/'
//done in leetcode!