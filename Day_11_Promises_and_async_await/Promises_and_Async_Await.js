/*Day 11 */
//Activity 1: Understanding Promises✅

//Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise consumed!")
    },2000)
})
promiseOne.then((message)=>{
    console.log(message);
})
//Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

const promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(`Promise rejected! an unusual Error occured `);
    },3000)
})
promiseTwo.catch((message)=>{console.error(message);});

// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const fetchData = (data,delay)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(data);
            },delay)
        })
};

fetchData("Data 1",1000)
.then((data)=>{
    console.log(data);
    return fetchData("Data 2",1000)
})
.then((data)=>{
    console.log(data);
    return fetchData("Data 3",1000)
})
.then((data)=>{
    console.log(data);
})


//Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const asyncfunciton  = async ()=>{
    const mypromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise resolved!")
        },2000)
    });
    const result = await mypromise;
    console.log(result);
}
asyncfunciton();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

const asyncfunction2 = async ()=>{
    try {
        const message = await promiseTwo;
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}
asyncfunction2()

//// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

const fetchdata = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/2')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error: ",error));
}
fetchdata()

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

const fetchdata2 = async ()=>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
        const data = response.json();
        console.log(data);
    } catch(error){
        console.error("Error",error);
    }
}
fetchdata2();

// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promiseThree = fetchData("Promise 3", 1000);
const promisefour = fetchData("Promise 4", 2000);
const promisefive = fetchData("Promise 5", 3000);

Promise.all([promiseThree, promisefour, promisefive])
    .then(values => {
        console.log(values);
    });


// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promiseThree, promisefour, promisefive])
.then(value => {
    console.log('First resolved promise:', value);
})
