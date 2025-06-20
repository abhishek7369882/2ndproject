const socket = new WebSocket('ws://localhost:3000');
const form = document.getElementById('input-form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

socket.onmessage = function(event) {
  const msg = document.createElement('div');
  msg.classList.add('message');
  msg.textContent = event.data;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
};

form.addEventListener('submit', function(e) {
  e.preventDefault();
  socket.send(input.value);
  input.value = '';
});
