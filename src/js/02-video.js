
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const vimeoPlayer = document.querySelector('#vimeo-player')
const player = new Player(vimeoPlayer);

  

const onTimeUpdate = (data) => {
  const currentTime = data.seconds;
  saveTimeToLocalStorage(currentTime);
};

player.on('timeupdate', onTimeUpdate);
  

  const saveTimeToLocalStorage = throttle((time) => {
    localStorage.setItem('videoplayer-current-time', time);
  }, 1000); 
  

  window.addEventListener('load', () => {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
      player.setCurrentTime(parseFloat(savedTime));
    }
  });
