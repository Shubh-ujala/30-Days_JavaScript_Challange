/**********Day 6: Arrays**********/
//Activity 1: Array Creation and Access✅

//Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const myArr = [1,2,3,4,5]
console.log(myArr);
//Task 2: Access the first and last elements of the array and log them to the console.
console.log(`first element of the array is ${myArr[0]}`);
console.log(`Last element of the array is ${myArr[myArr.length-1]}`);


//Activity 2: Array Methods (Basic)✅

//Task 3: Use the push method to add a new number to the end of the array and log the updated array.
const array = [3,4,5];
array.push(10);
console.log(array);//[3,4,5,10]


//Task 4: Use the pop method to remove the last element from the array and log the updated array.
array.pop();
console.log(array);//[3,4,5]

//Task 5: Use the shift method to remove the first element from the array and log the updated array.

array.shift();
console.log(array);//[4,5]

//Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

array.unshift(3);
console.log(array);//[3,4,5]


///Activity 3: Array Methods (Intermediate)✅

//Task 7: Use the map method to create a new array where each number is doubled and log the new array.

const myarr = [3,4,5,6,7];
const newArr = myarr.map(function(val){
    return 2*val;
})

console.log(newArr);//[6,8,10,12,14]

//Task 8: Use the filter method to create a new array with only even numbers and log the new array.

const filtered_array = myarr.filter((e)=>{
    if(e%2==0){
        return e;
    }
})
console.log(filtered_array);//[4,6]

//Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

const sum = myarr.reduce((acc, currentValue) => acc + currentValue, 0);
console.log(sum); // Output: 25

//Activity 4: Array Iteration✅

//Task 10: Use a for loop to iterate over the array and log each element to the console.
let array1 = [10,30,2];
for(let i = 0 ; i < array1.length ; i++){
    console.log(array1[i]);
}

//Task 11: Use the forEach method to iterate over the array and log each element to the console.

array1.forEach((e)=>{
    console.log(e);
})

//Activity 5: Multi-dimensional Arrays
//Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr);

//Task 13: Access and log a specific element from the two-dimensional array.
console.log(arr[0][0]);
console.log(arr[0][1]);
console.log(arr[0][2]);
console.log(arr[1][0]);
console.log(arr[1][1]);
console.log(arr[1][2]);
console.log(arr[2][0]);
console.log(arr[2][1]);
console.log(arr[2][2]);

