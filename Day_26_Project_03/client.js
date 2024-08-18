// const socket = io('http://localhost:8000');
const socket = io('http://localhost:8000',{transports:['websocket']})



const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');

var audio = new Audio('ting_cut.mp3');

//append function : whose functionality is to append the message on our main container

const append = function(message,position){
    const messageElement = document.createElement('div');
    // console.log(messageElement);
    
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);

    messageContainer.append(messageElement);
    if(position=='left'){
        audio.play();
    }

}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append(`You:${message}`,'right');
    socket.emit('send', message);
    messageInput.value="";
})
const name = prompt("Enter your name to join");

socket.emit('new-user-joined',name);

socket.on('user-joined', name =>{
    append(`${name} joined the chat`, 'right')
})
socket.on('receive', data =>{
    append(`${data.name}: ${data.message}`, 'left')
})
socket.on('left', name =>{
    append(`${name} left the chat!`, 'left');
})