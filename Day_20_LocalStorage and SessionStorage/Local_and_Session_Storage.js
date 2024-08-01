// Day-20 Local ans session Storage!

//Activity 1: Understanding LocalStorage✅

//Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.

localStorage.setItem('myKey','Hello JavaScript');
const string = localStorage.getItem('myKey');
console.log(string);

console.log(`\n<--- Task 1 ended! --->\n`);

//Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

const myObj = {
    name:"Shubh",
    age:20,
    email:"shubh@email.com"
}
localStorage.setItem('Object', JSON.stringify(myObj));
const output = localStorage.getItem('Object');
const actual_output = JSON.parse(output);
console.log(actual_output);

console.log(`\n<--- Task 2 ended! --->\n`);

//Activity 2: Using LocalStorage✅

//task 3 
console.log(`\nTask3 done in seprate file!`);
console.log(`\n<--- Task 3 ended! --->\n`);

//Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.

localStorage.setItem('name',"shubh ujala");
localStorage.setItem('age',"20");
localStorage.setItem('email',"shubh@yahoo.com");
const item2= localStorage.getItem('age');
localStorage.removeItem('age');
const item1 = localStorage.getItem('key');
const item3 = localStorage.getItem('email');

console.log(item1);
console.log(item2);//20
console.log(item3);
localStorage.setItem('password',"20suehAI");
localStorage.removeItem('password')
console.log(localStorage.getItem('password'));//null

console.log(`\n<--- Task 4 ended! --->\n`);


//Activity 3: Understanding SessionStorage

//Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
sessionStorage.setItem('name',"shubh ujala");
console.log(sessionStorage.getItem('name'));
console.log(`\n<--- Task 5 ended! --->\n`);

//Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const object = {
    userName:"shubh ujala",
    challange:"30-DaysJS",
    completed : false,
    details : {
        email:"shubh@email.com",
        pass:"812390agbsm",
        passStatus:"Strong!"
    }
}

sessionStorage.setItem('userDetails',JSON.stringify(object));
const output1 = sessionStorage.getItem('userDetails');
console.log(JSON.parse(output1));
console.log(`\n<--- Task 6 ended! --->\n`);

//Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.

sessionStorage.setItem('name',"shubh ujala");
sessionStorage.setItem('age',"20");
sessionStorage.setItem('email',"shubh@yahoo.com");
const item22= sessionStorage.getItem('age');
localStorage.removeItem('age');
const item11 = sessionStorage.getItem('name');
const item33 = sessionStorage.getItem('email');

console.log(item11);
console.log(item22);//20
console.log(item33);
sessionStorage.setItem('password',"20suehAI");
sessionStorage.removeItem('password')
console.log(sessionStorage.getItem('password'));//null

console.log(`\n<--- Task 8 ended! --->\n`);

// Task 9 : Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.

function saveAndRetrieveStorage(key, value) {
 
    localStorage.setItem(key, value);

    
    sessionStorage.setItem(key, value);

   
    const localStorageValue = localStorage.getItem(key);

   
    const sessionStorageValue = sessionStorage.getItem(key);

   
    console.log(`Value from localStorage for key "${key}":`, localStorageValue);
    console.log(`Value from sessionStorage for key "${key}":`, sessionStorageValue);
}
saveAndRetrieveStorage('username', 'Shubh Ujala');
console.log(`\n<--- Task 9 ended! --->\n`);

//Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.




function clearStorageAndVerify() {
    
    localStorage.clear();

    
    sessionStorage.clear();

    
    const isLocalStorageEmpty = localStorage.length === 0;

    
    const isSessionStorageEmpty = sessionStorage.length === 0;

    
    console.log('Is localStorage empty?', isLocalStorageEmpty);
    console.log('Is sessionStorage empty?', isSessionStorageEmpty);
}

clearStorageAndVerify();
console.log(`\n<--- Task 10 ended! --->\n`);

