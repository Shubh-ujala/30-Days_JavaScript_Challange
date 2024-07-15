// ********Day 3: Control Structures********

// Activity 1: If-Else Statements✅

//Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let num = 100; 
if(num>0){
    console.log(`number = ${num}, which is positive`);
}else if (num == 0){
    console.log(`number = ${num}, which is zero`);
}else{
    console.log(`number = ${num}, which is negative`);
}

//Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 8;
if(age>=18){
    console.log(`Eligible to vote`);
}else{
    console.log(`not eligible`);
}

//Activity 2: Nested If-Else Statements✅
//Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let a = 10;
let b = 5;
let c = 3;
if(a>=b){
    if(a>=c){
        console.log(`${a} is greatest`);
    }
}else if (b>=c){
    if(b>=a){
        console.log(`${b} is greatest`);
    }
}else {
    console.log(`${c} is greatest`);
}

//Activity 3: Switch Case✅
//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 7 ;
switch (day) {
    case 1:
        console.log(`Monday`);
        break;
    case 2:
        console.log(`Tuesday`);
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log(`friday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
    case 7:
        console.log(`Sunday`);
        break;
    default:
        console.log('Please provide number between 1-7');
        break;
}
/*Note: Switch Statement with Exact Match (Using day Example):
(above example)
The switch statement in the day example evaluates the value of day and compares it directly to the case labels, which are constant values (1, 2, 3, etc.).
This is a direct comparison where day is checked against each constant value in the case labels.
 */

//Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let marks = 90
switch (true) {
    case marks>=90 :
        console.log(`your grade is A`);
        break;
    case marks>=80 :
        console.log(`your grade is B`);
        break;
    case marks>=70 :
        console.log(`your grade is C`);
        break;
    case marks>=60 :
        console.log(`your grade is D`);
    case marks>=50:
        console.log(`your grade is F `);
        break;
    default:
        console.log(`please provide marks within 100`);
        break;
}
/*Note: Switch Statement with Conditions (Using marks Example):
(above example)
In the marks example, the conditions are not constant values; they are expressions (marks >= 90, marks >= 80, etc.).
To evaluate conditions, you need to switch on true and use case labels that are conditions. */


//Activity 4: Conditional (Ternary) Operator✅

//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let num1 = 4;
//using bit manipulation**
((num1 & 1 ) == 0)? console.log(`number is even`): console.log(`number is odd`);
//using normal approach*
(num1%2==0)? console.log(`number is even`):console.log(`number is odd`);


//Activity 5: Combining Conditions✅

//Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2012;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log(`its an leap year`);
}else{
    console.log(`not a leap year`);
}

/*
Feature Request:
1> Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
2> Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
3> Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
4> Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
5> Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
*/


//Question 1:
let x = 10;
if(x>0){console.log(`positive`);}
else if(x===0){console.log(`zero`);}
else{console.log(`negative`);}

//Question 2:
let userAge = 21;
if(userAge>=18){console.log(`eligible`);}
else{console.log(`not eligible`);}

//Question 3:
let day1 = 3
switch (day1) {
    case 1:
        console.log(`mon`);
        break;
    case 2:
        console.log(`tue`);
        break;
    case 3:
        console.log(`wed`);
        break;
    case 4:
        console.log(`thu`);
        break;
    case 5:
        console.log('fri');
        break;
    case 6:
        console.log(`sat`);
        break;
    case 7:
        console.log(`sun`);
        break;
    default:
        console.log('Provide day in 1-7 range');
        break;
}

//Question 4:
let mark = 90
switch (true) {
    case mark>=90 :
        console.log(` A`);
        break;
    case mark>=80 :
        console.log(` B`);
        break;
    case mark>=70 :
        console.log(`C`);
        break;
    case mark>=60 :
        console.log(` D`);
    case mark>=50:
        console.log(`F `);
        break;
    default:
        console.log(`please provide marks within 100`);
        break;
}

// Question 5:
let year1 = 2014;
if((year1 % 4 === 0 && year1 % 100 !== 0) || year1 % 400 === 0){
    console.log('leap year');
}else{
    console.log(`not a leap year`);
}