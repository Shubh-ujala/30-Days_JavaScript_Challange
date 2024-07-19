/******Day 7: Objects********/
//Activity 1: Object Creation and Access✅

//Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const atomic_habits = {
    author:"James Clear",
    title:"Atomic Habits: The Life-Changing Million Copy Bestseller",
    year:2018,
}
console.log(atomic_habits.author)

//Task 2: Access and log the title and author properties of the book object.
console.log(atomic_habits.title)
console.log(atomic_habits.year)

//Activity 2: Object Methods✅

//Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

const book = {
    title:"Atomic Habits: The Life-Changing Million Copy Bestseller",
    author:"James Clear",
    details: function(){return `title of the book is ${this.title} and author of the book is ${this.author} `},
    updateYear: function(year){
        return this.year = year;
    }
}

console.log(book.details());

//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

// book.updateYear = function(year){
//     return book.year = year
// }
// console.log(`Now the year of the book is updated to ${book.updateYear(1999)}`);
// console.log(book.year);//1999

//Way-2 to solve this task
book.updateYear(2002)
console.log(book.year);//2002 


//Activity 3: Nested Objects✅

//Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
    name : "Special Book creations!",
    books : [
        {
            name: "Atomic Habits",
            author:"James clear",
            title:"Atomic Habits: The Life-Changing Million Copy Bestseller"
        },
        {
            name : "THE ART OF HAPPINESS",
            author:"The Dalai Lama",
            title:"The Art of Happiness: A Handbook for Living"
        },
        {
            name: "Do It Today",
            author:"Darius Foroux",
            title:"Do It Today: Overcome procrastination, improve productivity and achieve more meaningful things"
        }
    ]
}

console.log(library);
//Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(`Name of the library is `);
console.log(library.name);
console.log(`<------------->`);
console.log(`Book titles are: `);
console.log(library.books[0].title);
console.log(library.books[1].title);
console.log(library.books[2].title);


//Activity 4: The this Keyword✅

//Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

// way -1 
book.greeting = function(){
    return `Thanks for purchasing you have just purchased the book having title '${book.title}',which is published on the year ${book.year}`
}
console.log(book.greeting());

//if we declare the same method inside the book object then we have to use this keyword in place of book 
//for example  :  books.title -> this.title & books.year = this.year

//Activity 5: Object Iteration

//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
const book1 = {
    title:"Atomic Habits: The Life-Changing Million Copy Bestseller",
    author:"James Clear",
    details: function(){return `title of the book is ${this.title} and author of the book is ${this.author} `},
    updateYear: function(year){
        return this.year = year;
    }
}
console.log(`Values of the key`);
for (const key in book1) {
    console.log(book1[key]) 
}
console.log(`Keys: `);
for (const key in book1) {
    console.log(key);
}

//Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
const keys = Object.keys(book1);//returns array of key
console.log("Keys:", keys);

const value = Object.values(book1);//returns array of values
console.log("Values: ",value);
