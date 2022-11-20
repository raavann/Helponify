// Collapsible
var coll = document.querySelector(".collapsible");

let __score__=0;    // current score
let __total__ = 0;  // total score
let __questionCount__ = 0;  // index of question
let __selected__ = 'null';  // selected test in drop down menu

let __uCity__ = '';  // user city
let firstmsg = false;

let cityFlag = false;

// based on user's address we will match a perfect doctor for him/her.
/*
+------------------------------------+
| patient name: 
| doctor name:
| illness:
| level of illness:
+------------------------------------+
*/

const chatBottom = document.getElementById("chat-bar-bottom")

document.querySelector('.chatWindow').addEventListener("click", collapse);
document.querySelector('#cross').addEventListener("click", collapse);

function collapse(){
    coll.classList.toggle("active");

    var content = coll.nextElementSibling;

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }

    if(!firstmsg){
        // Send first bot message
        firstBotMessage();
        firstmsg=true;
    }
}

function firstBotMessage() {
    let time = (function getTime() {
        let today = new Date();
        var options = { hour: '2-digit', minute: '2-digit', weekday: 'short'};
        today = today.toLocaleDateString("en-US", options)
        return today;
    })();

    // $("#chat-timestamp").append(time);
    document.querySelector('#chat-timestamp').innerHTML = time;
    dropdown()

}

function dropdown(){
    let firstMessage = "Hello! Welcome to the new text some text some more text..\nThen select the following options!";
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    // creating drop down and onchange => questioning(this)
    //                                                        onchange = questioning(this)
    let optionHtml = '<select name="disorders" id="disorders" onchange="questioning(this)"> <option value="null">Select a test</option> ';
    for (var key in questions){
        optionHtml += `<option value="${key}">${key}</option>`
    
    }

    $("#chatbox").append(optionHtml);

}



// questioning
function questioning(select){
    if(select.value == 'null'){
        resetVal();
        return;
    }

    __selected__ = select.value;
    __total__ = questions[select.value]['totalPoints'];

    loadQuestion(0);
}

function loadQuestion(questionNum){
    if(questionNum < questions[__selected__]['questions'].length){
        const element = questions[__selected__]['questions'][questionNum];

        let htm = '<p class="botText"><span>' + element['question'] + '</span></p>';
        for (let index = 0; index < element['responses'].length; index++) {
            const option = element['responses'][index];
            htm += `<button class="option" onclick="updateScore(${index})"> ${option}</button>`
            
        }
        $("#chatbox").append(htm);
        chatBottom.scrollIntoView(true);

    } else {
        giveScore();
        chatBottom.scrollIntoView(true);

    }
}

function giveScore(){
    let percScore = __score__ / __total__;

    let htm = '';
    if(percScore < 0.5){
        htm = `<p class="botText"><span> You're just fine! Don't overthink things, you don't need a doctor's help! </span></p>`
    } else if( percScore < 0.75){
        htm = `<p class="botText"><span> You might need help! Please enter your city so we may help you reach a good doctor! </span></p>`
    } else {
        htm = `<p class="botText"><span> You need help right now! Please enter your city so we may help you reach a good doctor! </span></p>`
    }

    $("#chatbox").append(htm);
    chatBottom.scrollIntoView(true);

    if (percScore >= 0.35){

        removeEvent(sendButton);

        addEvent(getCity);
    }

    // reset();
}

function addEvent(event){
    document.querySelector('.fa-send').addEventListener('click', event);
    document.querySelector('#textInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            event();
        }
    });
}

function removeEvent(event){
    document.querySelector('.fa-send').removeEventListener('click', event);
    document.querySelector('#textInput').removeEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            event();

        }
    });
}


// import {getDoc, insertUser} from '../../app.js'

function getCity(){

    let city = $("#textInput").val();

    let userHtml = '<p class="userText"><span>' + city + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    chatBottom.scrollIntoView(true);

 
    // if city in doctors database send list of available doctors

    let htm = '';
    if(city == 'indore'){

    
    htm = `<p class="botText"><span> Dr. Shetti is available in indore<br>Mob no. 6261199122,<br> wait we are connecting you to him! </span></p>`
    } else {
        htm = `<p class="botText"><span> Sorry no doctor available in your city </span></p>`
    }

    // let docs = getDoc();
    // console.log(docs);
    // for (let index = 0; index < docs.length; index++) {
    //     const element = docs[index];
        
    // }

    $("#chatbox").append(htm);
    chatBottom.scrollIntoView(true);


    removeEvent(getCity);
    addEvent(sendButton);
}

function updateScore(optionValue){
    let optionSelected =  questions[__selected__]['questions'][__questionCount__]['responses'][optionValue];
    let htm = '<p class="userText"><span>' + optionSelected + '</span></p>';
    $("#chatbox").append(htm);
    chatBottom.scrollIntoView(true);

    __score__ += optionValue + 1;
    __questionCount__++;
    loadQuestion(__questionCount__);
}

// Retrieve the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    chatBottom.scrollIntoView(true);
}

//Gets the text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    chatBottom.scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    chatBottom.scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function reset() {
    // buttonSendText('')
    resetVal();
    // firstmsg = false;
    firstBotMessage();
}

// addEvent(sendButton);

function resetVal(){
    __total__ = 0;
    __score__ = 0;
    __questionCount__ = 0;
    __selected__ = 'null';
}

// websocket
const socket = io('http://localhost:3002', { transports: ['websocket', 'polling', 'flashsocket'] });
// const chatBottom = document.getElementById('chat-bar-bottom');

socket.on('chat-message', data => {
    console.log(data)
    // append(data,false);
    append(data,false);
})

$("#textInput").on('keyup', function (e) {
    if (e.keyCode === 13) {
       e.preventDefault();
       const msg = $(this).val();
       socket.emit('send-chat-message',msg);
       $(this).val('');
       append(msg, true);
    }
 });

function append(msg,isRec){
    let htm = ''
    if(isRec){
        htm = `<p class="botText"><span>${msg}</span></p>`
    } else{
        htm = `<p class="userText"><span>${msg}</span></p>`
    }

    $("#chatbox").append(htm);
    // document.querySelector('#chatbox').append(htm);
    chatBottom.scrollIntoView(true);
}