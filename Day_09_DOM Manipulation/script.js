const mydiv = document.querySelector('#main1').style.backgroundColor ="crimson";

//Activity 1: Selecting and Manipulating Elements✅


//Task 1: Select an HTML element by its ID and change its text content.
const intro = document.getElementById('intro')
intro.innerHTML = "My name is Shubh"

//Select an HTML element by its class and change its background color.

const greeting = document.getElementsByClassName('greeting');
greeting[0].style.backgroundColor = 'black'
greeting[0].style.color = 'white'


//Activity 2: Creating and Appending Elements✅

//Task 3: Create a new div element with some text content and append it to the body.
const body = document.querySelector('body')
const maindiv = document.querySelector('#main')
const newdiv = document.createElement('div');
const heading = document.createElement('h1');
heading.innerHTML = "hey I am new Div!"
newdiv.appendChild(heading)
maindiv.appendChild(newdiv);
newdiv.style.width = "500px"
newdiv.style.height = "400px"
newdiv.style.backgroundColor = "yellow"

//Task 4: Create a new li element and add it to an existing ul list.

const ul = document.querySelector('#months');

const li = document.createElement('li');
li.innerHTML ="APRIL (I am appended!)";
li.style.fontSize="20px"
ul.appendChild(li)

//Activity 3: Removing Elements✅

//Task 5: Select an HTML element and remove it from the DOM.

const ele = document.getElementsByClassName('removed');

ele[0].remove();

//Task 6: Remove the last child of a specific HTML element.

const list = document.querySelector('#removing');
const removeele = list.lastElementChild
removeele.remove(); // 4 removed!

list.remove()

//Activity 4: Modifying Attributes and Classes✅

//Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

const image = document.querySelector('img')
image.src = "chai.jpeg"

//Task 8: Add and remove a CSS class to/from an HTML element.

const element = document.querySelector('.removeclass')
element.classList.add("addclass")
element.classList.remove("removeclass")



//Activity 5: Event Handling✅

//Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const para = document.querySelector('#content')
const btn = document.querySelector("#changepara")
btn.addEventListener('click',()=>{
    para.innerHTML = "Nope! you are not shubh"
})
//Task 10: Add a mouseover event listener to an element that changes its border color.
const div = document.querySelector("#border")
div.addEventListener('mouseover',()=>{
    div.style.border = "solid 10px black"
    div.style.backgroundColor="crimson"
})
