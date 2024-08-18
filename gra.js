const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
        // Recebe o áudio e grava em um arquivo
        fs.appendFileSync('audioStream.wav', message);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:3000');
