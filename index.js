const form = document.querySelector('form');
const messageInput = document.querySelector('#message');
const sendButton = document.querySelector('#send-button');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	const message = messageInput.value;
	sendMessage(message);
	messageInput.value = '';
});

function sendMessage(message) {
	const xhr = new XMLHttpRequest();
	xhr.open('POST', '/send-message');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
		if (xhr.status === 200) {
			console.log('Message sent');
		} else {
			console.log('Error sending message');
		}
	};
	xhr.send(JSON.stringify({message: message}));
}
