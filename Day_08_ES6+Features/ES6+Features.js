/******Day 8: ES6+ Features******/
//Activity 1: Template Literals✅(means literals delimited with backtick (`) characters)

//Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let name = "shubh";
let age = 20;

console.log(`Hey! my name is ${name} & I am  ${age} years old`);

//Task 2: Create a multi-line string using template literals and log it to the console.

const poem = `Twinkle twinkle little star.
How I wonder what you are.
Up above the world so high.
Like a diamond in the sky.
Twinkle twinkle little star.
How I wonder what you are.`
console.log(poem);

//Activity 2: Destructuring✅
/*Note: The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. */

//Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const myArr = ["shubh",10,20,30,40,50];
const [first,second] = myArr;
console.log(first);//"shubh"
console.log(second);//10

let a,b,other;
[a,b] = [1,2]
console.log(a);
console.log(b);
[a,b,...other] = [1,2,3,50,70,29,952,98]
console.log(other);//[ 3, 50, 70, 29, 952, 98 ]

//Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
    title:"Atomic Habits: The Life-Changing Million Copy Bestseller",
    author:"James Clear",
    details: function(){return `title of the book is ${this.title} and author of the book is ${this.author} `},
    updateYear: function(year){
        return this.year = year;
    }
}

const {title,author} = book;
console.log(title);
console.log(author);


//Activity 3: Spread and Rest Operators✅

//Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const arr1 = [1,3,5,7,9,11];
const arr2 = [2,4,6,8,10,12];
const newArr = [...arr1,...arr2]
console.log(newArr);//here (...) is known as spread operator.
 //output- >  
 /*1,  3, 5, 7, 9,
   11,  2, 4, 6, 8,
   10, 12 */  
 
//Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

const sum = function(...n){
    ans = 0 ;
    for (const num of n) {
        ans += num;
    }
    return ans;
}

console.log(sum(1,2,3,4,5));//15
console.log(sum(10));//10
console.log(sum(10,-10,20,-20));//0
console.log(sum(50000,6000,-50000));//6000

// major difference between rest and spread operator is in rest operator we are converting the rest arguments into an array! while in spread operator we are converting the array into elements

//Activity 4: Default Parameters✅

//Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function product(a,b=1){
    console.log(a*b);
}

product(5,10);//50
product(3);//3

//Activity 5: Enhanced Object Literals✅

//Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

let author1 = 'James clear';
let title1 = "Atomic Habits: The Life-Changing Million Copy Bestseller";
let publishYear = 1999;

const myBook = {
    author1,
    title1,
    publishYear,
    greet(){
        return `${title1} by ${author1} , is published in the year ${publishYear}`
    },
    ['classic'](){
        return publishYear<2000;
    }
}

console.log(myBook.greet());
console.log(myBook.classic());//true


//Task 9: Create an object with computed property names based on variables and log the object to the console.

const details = {
    firstName : "Shubh",
    LastName : "Ujala",
    age:20
}
//I have to created the object like above i have but using computed property

const p1 = "firstName";
const p2 = "LastName";
const p3 = "age";
const myDetails = {
    [p1]:"Shubh",
    [p2]:"Ujala",
    [p3]:20
}

console.log(details);//{ firstName: 'Shubh', LastName: 'Ujala', age: 20 }
console.log(myDetails);//{ firstName: 'Shubh', LastName: 'Ujala', age: 20 }