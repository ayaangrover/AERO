const url = 'https://61c7a5a8-fbf2-442f-905d-a687daa25c71-00-1kwplgteasmdd.janeway.replit.dev/';

async function sendMessage() {
  let messageInput = document.getElementById('message-input');
  let message = messageInput.value;
  let fullUrl = url + 'send/' + message;
  await fetch(fullUrl);

}

async function getMessages() {
  let res = await fetch(url);
  let messages = await res.json();

  let messagesDiv = document.getElementById('message-div');
  messagesDiv.innerHTML = '';

  for (let i = messages.length - 1; i > 0; i--) {
    messagesDiv.innerHTML += '<p>' + messages[i] + '</p>';
  }
}

setInterval(getMessages, 1000);S