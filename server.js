const express=require("express");
const http=require("http");
const socketIO=require("socket.io");
const fs=require('fs');

const app=express();
const server=http.createServer(app);
const io=socketIO(server);
app.use(express.static("public"));
const sms=["Good Morning","Good Afternoon"];

io.on("connect",(socket)=>{
    console.log("Connected");

    // socket.emit("sms",sms[Math.round(Math.random())]);
    // const audioStream=fs.createReadStream('music.mp3');
    const audioStream=fs.createReadStream('public/music.mp3');
    
    audioStream.on("data",(chunk)=>{socket.emit("audio",chunk);});
    
    audioStream.on('end', () => {
        socket.emit('end');
        console.log('Áudio transmitido.');
      });
    // audioStream.on("data",()=>{
    //     console.log("Audio Transmitido com sucesso")
    // })

    // Handle reconnection attempts
socket.on('reconnect_attempt', (attemptNumber) => {
    console.log(`Reconnection attempt ${attemptNumber}`);
  });
  
  // Handle successful reconnection
  socket.on('reconnect', (attemptNumber) => {
    console.log(`Successfully reconnected after attempt ${attemptNumber}`);
  });
  
    socket.on("disconnect",()=>{
        console.log("Client disconnected....");
    })
});


server.listen(3001,()=>{
    console.log("Server is listing on ",3000);
});