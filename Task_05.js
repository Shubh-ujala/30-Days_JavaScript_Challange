//Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

const student_count = 30;
function greeting(name){
    console.log(`Hey ${name} welcome to the webpage.`);
}

const randomNum = function(){
    console.log(Math.round(Math.random()*10) + 1);
}

export{
    student_count,
    greeting,
    randomNum
}