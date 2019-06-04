let play = document.querySelector('button');
let disk = document.querySelector('.disk');
let audio = document.querySelector('audio');
let span = document.querySelector('span');
let needle = document.querySelector('.needle');

console.log(audio.ended)
audio.addEventListener('timeupdate', () => {
  span.innerText = `${Math.round(audio.currentTime*1000)} ms`;
  let angle = 40 * audio.currentTime / audio.duration;
  needle.style.transform = `skewX(${angle}deg)`
})

function startPlay () {
  disk.classList.add('animated');
  audio.play();
}

function pausePlay() {
  audio.pause();
  disk.classList.remove('animated')  
}

function stopPlay () {
  disk.classList.remove('animated')
}

play.addEventListener('click', () => {
  if (audio.ended) {
    stopPlay();
    audio.currentTime = 0;
    return;
  }
  if(audio.paused) {
    startPlay();
  } 
  else {
    pausePlay();
  }
})
