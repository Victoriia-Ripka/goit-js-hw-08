import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let videoTime;

if(localStorage.getItem('videoplayer-current-time')){
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

player.on('timeupdate', throttle((data) => {
    videoTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', Number(data.seconds));
}, 1000))
