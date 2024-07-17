/*************** Day 5: Functions********** */
//Activity 1: Function Declaration✅

//Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkNum(n){
    if((n & 1) == 0){console.log(true);}
    else{console.log(false);}
}
//checkNum(14);
//Task 2: Write a function to calculate the square of a number and return the result.
function sqareNum(num){
    console.log(`Square of your number ${num} is ${num*num}`);
}
//sqareNum(15);


//Activity 2: Function Expression✅
//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const maxoftwoNum = function (n1,n2){
    if(n1>n2){
        console.log(`${n1} is maximun`);
    }else if(n1 === n2){
        console.log(`Both the numbers ${n1} and ${n2} are equal`);
    }else{
        console.log(`${n2} is maximum`);
    }
}
// maxoftwoNum(5,5);

//Task 4: Write a function expression to concatenate two strings and return the result.

const concatinateStr = function(s1,s2){
    if(typeof(s1) == "string" && typeof(s2) == "string"){
        console.log(s1+" "+s2);
    }else{
        console.log(`Please provide two strings`);
    }
}

// concatinateStr("shubh","ujala");

//Activity 3: Arrow Functions✅

//Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sum = (n1,n2)=>(console.log(n1+n2));
sum(10,5);

//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value

const charCheck = (s1,c1) => {
    if(s1.includes(c1) == true && typeof(s1)=="string" && typeof(c1)=="string"){
        console.log(true);
    }else if(typeof(s1)!= "string" || typeof(c1) != "string"){
        console.log(`Please provide a string and a character to check`);
    }
    else{
        console.log(false);
    }
}
charCheck("shubh","k");

//Activity 4: Function Parameters and Default Values✅
//Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function productNum(n1,n2=1){
    console.log(`Product of two numbers is ${n1*n2}`);
}
productNum(5,5);

//Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greeting(s1,age = 10){
    if(typeof(s1)=="string" && typeof(age)=="number"){
        console.log(`Good morning ${s1},Welcome to our website . you have provided your age ${age}`);
    }else{
        console.log(`Please provide your name and your age!`);
    }
    
}
greeting("shubh", 21)

//Activity 5: Higher-Order Functions✅
//Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function HigherOrder (f1,n1){
    if(typeof(f1)=="function" && typeof(n1)=="number"){
        for(let i = 1 ; i <=n1 ; i++){
            f1();
        }
    }
    
}

const sayHi = ()=>{console.log('Hello');}
// HigherOrder(sayHi,5)


//Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function higherOrder(f1,f2,val){
    for(let i = 1 ; i <=val ; i++){
        f1();
    }
    f2();
}

const sayHello = () => {console.log("Hello guys!");}
const sayBye = () => {console.log(`I am done ok bye!`);}

higherOrder(sayHello,sayBye,3)


