// Day-19 Regular expression!
// referance -> https://regexr.com/
//Activity 1: Basic Regular Expressions✅
// task 1
// Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
const String = "JavaScript is a very powerful language.";
const regex = /\bJavaScript\b/g;
const regex1 = /\bscripting\b/g;
const matches = String.match(regex);
const matches1 = String.match(regex1);
console.log(matches);
console.log(matches1);//null because no scripting word is here!

console.log(`\n<---Task 1 done! --->\n`);
//Note-> \b asserts a word boundary, ensuring that we match "JavaScript" as a whole word, not as part of another word (e.g., "JavaScripting").
//JavaScript is the literal string we want to match.
// \b again asserts a word boundary after "JavaScript".
//g flag enables global search, so it finds all occurrences in the input string, not just the first one.

//Task 2:
//Write a regular expression to match all digits in a string. Log the matches.

// Sample input string
const inputString = "there are 9 planets in our solar system. and talking about earth so earth have 1 moon!";

// Regular expression to match all digits
// const regex3 = /\b1,2,3,4,5,6,7,8,9\b/g;
// in this way it is not done because it will find the exact match of the 1,2,3,4,5,6,7,8,9 which is not present anywhere so it will done in this way!
const regex3 = /\d/g
// if we dont't put g after slash then we get this result:
/*['9',
index: 10,
input: 'there are 9 planets in our solar system. and talking about earth so earth have 1 moon!',
groups: undefined
]*/
const regex4 = /\bearth\b/g

const matches3 = inputString.match(regex3);
const matches4 = inputString.match(regex4);
console.log(matches3);
console.log(matches4);

console.log(`\n<---Task 2 done! --->\n`);

//Activity 2: Character Classes and Quantifiers✅
//Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

// Sample input string
const String1 = "Hello World! My name Is Shubh ujala.";
const regex5 = /\b[A-Z][a-z]*\b/g;
const matches5 = String1.match(regex5);
console.log(matches5);//[ 'Hello', 'World', 'My', 'Is', 'Shubh' ]
const regex6 = /\b[A-Z]*\b/g
const match6 = String1.match(regex6);
console.log(match6);
/*
[
  '', '', '', '', '', '',
  '', '', '', '', '', '',
  '', ''
] 
*/
console.log(`\n<---Task 3 done! --->\n`);

//Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const myString = "There are 123 apples and 456 bananas.";
const regex7 = /\d+/g;
const matches7 = myString.match(regex7);    
console.log(matches7);

console.log(`\n<---Task 4 done! --->\n`);

//Activity 3: Grouping and Capturing✅

//Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.

// const areaCode = "(123) 456-7890"
// const regex8 = /^\((\d{3})\) (\d{3})-(\d{4})$/;
// const matches8 = areaCode.exec(areaCode);
// console.log(matches8);

const phoneNumber = "(123) 456-7890";
const regex8 = /^\((\d{3})\) (\d{3})-(\d{4})$/;
const matches8 = regex8.exec(phoneNumber);
console.log("Matches:", matches8);
if (matches8 !== null) {
  const areaCode = matches8[1];
  const centralOfficeCode = matches8[2];
  const lineNumber = matches8[3];
  
  console.log("Area Code:", areaCode);
  console.log("Central Office Code:", centralOfficeCode);
  console.log("Line Number:", lineNumber);
} else {
  console.log("No match found.");
}

console.log(`\n<---Task 5 done! --->\n`);

//Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

const sampleEmail = "Shubh@example.com"
const regex9 = /[A-Z]\w+/g
const regex10 = /(@[\w.]+)/g
const username = sampleEmail.match(regex9);
const domain = sampleEmail.match(regex10)
console.log("Username: ",username);
console.log("Domain: ",domain);

console.log(`\n<---Task 6 done! --->\n`);


//Activity 4: Assertions and Boundaries

//Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.


const text = "Hello world, this is a test.";
const regex11 = /^\w+/;
// Matches a word at the beginning of the string
const match = text.match(regex11);
console.log(match[0]);
console.log(`\n<---Task 7 done! --->\n`);


//Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
const text1 = "Hello world, this is a test";
const regex12 = /\w+$/;
// Matches a word at the beginning of the string
const match1 = text1.match(regex12);
console.log(match1[0]);

console.log(`\n<---Task 8 done! --->\n`);


//Activity 5: Practical Applications

//Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const samplePassword = "Shubh123$";
const regexp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const isValid = regexp.test(samplePassword);

if (isValid) {
  console.log("Password is valid.");
} else {
  console.log("Password is not valid.");
}

console.log(`\n<---Task 9 done! --->\n`);





//Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

const sampleURL = "https://www.example.com/path?query=string#fragment";
const regexp1 = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-\.~:@\?%&=+#]*)?$/;

const isValid1 = regexp1.test(sampleURL);

if (isValid1) {
  console.log("URL is valid.");
} else {
  console.log("URL is not valid.");
}

console.log(`\n<---Task 10 done! --->\n`);

const numFunctions = 5;
const functionsArray = [];






