export function initVideo() {
  const videoElement = document.querySelector('.js-video-element');
  const videoControl = document.querySelector('.js-video-control');

  if (!videoElement || !videoControl) {
    return
  }

  videoControl.addEventListener('click', function(e) {
    e.stopPropagation();

    if (videoElement.paused) {
      videoElement.play();
      videoControl.classList.add('experts__play--hidden')
    }
  })

  videoElement.addEventListener('click', function() {
    videoElement.pause();
    videoControl.classList.remove('experts__play--hidden')
  })

}