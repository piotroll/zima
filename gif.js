
function playAnimatedGif() {
    const animatedGif = document.getElementById('animatedGif');
    
    
    animatedGif.style.display = 'block';
    animatedGif.src = animatedGif.src.split('?')[0] + '?timestamp=' + new Date().getTime();
  }
  setInterval(playAnimatedGif, 2000);