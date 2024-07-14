/******** Day 2: Operators **********/
//Activity 1: Arithmetic Operations✅

//Task 1: Write a program to add two numbers and log the result to the console.

let num1 = 10;
let num2 = 20;
let sum = num1+num2;
console.log(sum);

//Task 2: Write a program to subtract two numbers and log the result to the console.

let num3 = 10;
let num4 = 20;
let subtract = num3 - num4;
console.log(subtract);

//Task 3: Write a program to multiply two numbers and log the result to the console.

let n1 = 10;
let n2 = 10;
let multiplication = n1*n2;
console.log(multiplication);

//Task 4: Write a program to divide two numbers and log the result to the console.
let n3 = 10;
let n4 = 0;
let division = n3/n4;//infinity
console.log(division);

//Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

let number1 = 20;
let number2 = 3;
let remainder = number1 % number2;
console.log(remainder);

//Activity 2: Assignment Operators✅

//Task 6: Use the += operator to add a number to a variable and log the result to the console.

let sum1 = 10;
sum1+=1;
console.log(sum1);//11


//Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

let num = 10;
num-=1;
console.log(num);//9

//Activity 3: Comparison Operators✅

//Task 8: Write a program to compare two numbers using > and < and log the result to the console.

let s1 = 10;
let s2 = 20;
console.log(s1>s2);
console.log(s1<s2);

//Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

let s3 = 20;
let s4 = 20;
console.log(s3>=s4);
console.log(s3<=s4);

//Task 10: Write a program to compare two numbers using == and === and log the result to the console.

let c1 = 100;
let c2 = "100";
console.log(c1 == c2);//true
console.log(c1 === c2);//false

//Activity 4: Logical Operators✅

//Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

let c3 = 10;
let c4 = 20;
console.log(c3>c4 && c4 == c3);//false
console.log(c3<c4 && c4 != 0);//true

//Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

let c5 = 10;
let c6 = 20;
console.log(c5>c6 || c6 != 0);//true
console.log(c5>c6 || c5 === "10");//false


//Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

let c7 = 100;
console.log(c7!=0); //true
console.log(c7!=c6);//true

//Activity 5: Ternary Operator✅

//Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let num5 = -10;
(num5 >= 0 )? console.log(`${num5} is positive`): console.log(`${num5} is negative`);


//Feature Request:✅
/*
1> Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
2> Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
3> Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
*/

//Question 1 ->
const ArithemaricOperations = function(num1,num2){
    console.log(`Addition of two number is ${num1+num2}`);
    console.log(`Subtraction of two number is ${num1 - num2}`);
    console.log(`Multiplication of two number is ${num1*num2}`);
    console.log(`Division of two number is ${num1 / num2}`);
    console.log(`Remainder of two number is ${num1 %num2}`);
}

// ArithemaricOperations(10,5);

//Question 2 ->
const Comparison = function(n1,n2){
    if(n1>n2){
        console.log(`${n1} is greater`);
    }else if(n2>n1){
        console.log(`${n2} is greater`);
    }else if (n1 >= n2 && n1 == n2){
        console.log(`${n1} and ${n2} are equal`);
    }else{
        console.log('No condition matched!');
    }
}

// Comparison(10,20);

//Question 3 ->

const numCheck = function(bigNumber){
    (bigNumber>0)? console.log(`${bigNumber} is positive`): console.log(`${bigNumber} is negative`);
}

// numCheck(-10);

