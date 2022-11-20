// const socket = io('http://localhost:3002')
const socket = io('http://localhost:3002', { transports: ['websocket', 'polling', 'flashsocket'] });
const chatBottom = document.getElementById('chat-bar-bottom');

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