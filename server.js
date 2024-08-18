const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Configuração básica do Express
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Servir arquivos estáticos (cliente)
app.use(express.static('public'));

// Configurar o Socket.io para lidar com conexões
io.on('connection', (socket) => {
  console.log('Novo cliente conectado');

  setInterval(() => {
    socket.emit('sms', { timestamp: new Date(), message: 'Ola Seja Bem Vindo' });
  }, 1000);

  // socket.on('meuEvento', (dados) => {
  //    console.log('Dados recebidos:', dados);
  //   // socket.emit('resposta', 'Dados recebidos com sucesso');
   
  // });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

// Iniciar o servidor na porta 3000
server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
