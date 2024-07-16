/********  Day 4: Loops ******/
//Tasks/Activities:

//Activity 1: For Loop✅
//Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for(let i = 1 ; i <= 10 ; i++){
    // console.log(i);
}

//Task 2: Write a program to print the multiplication table of 5 using a for loop.

for(let i = 1 ; i <=10 ;i++){
    // console.log(`5 X ${i} = ${5*i}`);
}


//Activity 2: While Loop✅

//Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0;
let j=1;
while(j<=10){
    sum+=j;
    j++;
}
console.log(`sum of numbers from 1 to 10 = ${sum}`);

//Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let k = 10;
while(k>=1){
    // console.log(k);
    k--;
}

//Activity 3: Do...While Loop✅

//Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let n = 1;
do{
    console.log(n);
    n++;
}while(n<=5);

//Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let fact = 1;
let num = 4;
let i = 1;
do{
    fact*=i;
    i++
}while(i<=num);

console.log(fact);

//Activity 4: Nested Loops✅

//Task 7: Write a program to print a pattern using nested for loops:
/*
*
* *
* * *
* * * *
* * * * *
*/

let nst = 1;
for(let i = 0 ; i <5 ; i++){
    let pattern = "";
    for(let j = 0 ; j < nst;j++){
        pattern+="* " ;
    }
    nst++;
    console.log(pattern);
}


//Activity 5: Loop Control Statements✅

//Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.


for(let i = 1 ; i <=  10 ; i++){
    if(i == 5){
        console.log(`target ahead!`);
        continue;
    }
    console.log(i);
}

//Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for(let i = 1 ; i <=10 ; i++){
    if(i == 7){
        console.log(`lucky number ${i} reached loop terminated!`);
        break;
    }
    console.log(i);
}


/*
Feature Request:
1> Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
2> Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
3> Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
4> Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
5> Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.
*/

//Question 1 --->
for(let i = 1 ; i <= 10;i++){console.log(i)}
//Question 2 --->
for(let i = 1 ; i <=10 ; i++){console.log(5*i);}
//Question 3 --->
let nst1 = 1;
for(let i = 0 ; i < 5; i++){
    let pattern = "";
    for(let j = 0 ; j < nst1 ; j++){
        pattern+="* ";
    }
    nst1++;
    console.log(pattern);
}

//Question 4 --->
let add = 0 ;
let n1 = 1
while(n1<=10){
    add+=n1;
    n1++;
}
console.log(add);

//Question 5 --->
let factorial = 1 ;
let ans = 1;
let fact_of = 5;
do{
    factorial*=ans;
    ans++;
}while(ans<=fact_of);

console.log(factorial);
