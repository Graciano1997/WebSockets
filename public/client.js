const playButton = document.getElementById('playButton');
const socket=io();
 let audioChunks=[];

socket.on('audio', (chunk) => {
    audioChunks.push(chunk);
  });
  
  socket.on('end', () => {
    const blob = new Blob(audioChunks, { type: 'audio/mp3' }); // Certifique-se de que o tipo está correto
    const audioUrl = URL.createObjectURL(blob);
    const audio = new Audio(audioUrl);
    audio.play();
  });

// socket.on("sms",(data)=>{
// document.querySelector("#greeting").textContent=data;
// console.log(data);
// });