window.addEventListener('keydown', (e) => {
  //console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`key[data-key="${e.keyCode}"]`);
  //console.log(audio);
  //console.log(key);
  if(!audio) {
    return; // stop the function from running all together.
  }
  audio.currentTime = 0; // Rewind to the start.
  audio.play();
  key.classList.add('playing');
  //key.classList.remove('playing');
  //key.classList.toggle('playing');
  
});
function removeTransition(e) {
	//console.log(e);
  if(e.propertyName !== 'transform'){
    return; // Skip it if it is not a transform
  }
  console.log(e.propertyName);
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition)
});

