// Conectar ao servidor via Socket.io
const socket = io();

// Emitir evento quando o botão for clicado
document.getElementById('sendBtn').addEventListener('click', () => {
    socket.emit('meuEvento', { mensagem: document.querySelector("#sms").value });
});

// Escutar resposta do servidor
socket.on('resposta', (dados) => {
    document.getElementById('response').innerText = dados;
});
