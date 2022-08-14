window.addEventListener("keydown",function(e){
    const audio = document.querySelector(`audio[data-key=${e.code}]`)
    const audioKey = document.querySelector(`.key[data-key=${e.code}]`)
console.log(audio);
if(!audio) return;
audio.currentTime = 0; 
audio.play();
audioKey.classList.add('playing');


})



