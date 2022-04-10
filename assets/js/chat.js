// Collapsible
var coll = document.querySelector(".collapsible");

let __score__=0;    // current score
let __total__ = 0;  // total score
let __questionCount__ = 0;  // index of question
let __selected__ = 'null';  // selected test in drop down menu

let __uCity__ = '';  // user city
let firstmsg = false;

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

document.querySelector('.chatWindow').addEventListener("click", function () {
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
});

document.querySelector('#cross').addEventListener("click", function () {
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
});



function firstBotMessage() {
    let time = (function getTime() {
        let today = new Date();
        var options = { hour: '2-digit', minute: '2-digit', weekday: 'short'};
        today = today.toLocaleDateString("en-US", options)
        return today;
    })();

    $("#chat-timestamp").append(time);
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
        reset();
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
    if(percScore < 0.35){
        htm = `<p class="botText"><span> You're fine! </span></p>`
    } else if( percScore < 0.65){
        htm = `<p class="botText"><span> You might need help! Please enter your city so we may help you reach a good doctor! </span></p>`
    } else {
        htm = `<p class="botText"><span> You need help right now! Please enter your city so we may help you reach a good doctor! </span></p>`
    }

    $("#chatbox").append(htm);
    chatBottom.scrollIntoView(true);

    if (percScore >= 0.35){
        let city = getCity();
    }

    reset();
}

function getCity(){
    let userText = $("#textInput").val();

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    chatBottom.scrollIntoView(true);

    return userText;
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

function heartButton() {
    buttonSendText('❤️')
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

function reset(){
    __total__ = 0;
    __score__ = 0;
    __questionCount__ = 0;
    __selected__ = 'null';
}