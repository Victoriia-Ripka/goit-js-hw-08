import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const savedCurrentTime = localStorage.getItem('videoplayer-current-time');

if(savedCurrentTime){
    player.setCurrentTime(savedCurrentTime);
}

player.on('timeupdate', throttle((data) => {
    const {seconds} = data;
    localStorage.setItem('videoplayer-current-time', Number(seconds));
}, 1000))