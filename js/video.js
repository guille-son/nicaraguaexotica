const exampleModal = document.getElementById('exampleModal');
const myVideo = document.getElementById('myVideo');

exampleModal.addEventListener('shown.bs.modal', event => {
  console.log('Abierto y autoplay');
  myVideo.play();
});


exampleModal.addEventListener('hidden.bs.modal', event => {
  console.log('Cerrado y stop');
  myVideo.pause();
});