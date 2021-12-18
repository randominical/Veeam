/*
function topBg() {
    let bg = document.getElementById('bg');
    const column = document.getElementById('column');

    const columnPosition = column.getBoundingClientRect();
    bg.style.left = columnPosition.left + 'px';

    console.log(columnPosition);

}

topBg();

*/



function videoPlay() {
    let video = document.getElementById('player');
    let playBtn = document.getElementById('play');

    playBtn.onclick = function() {
        if (video.paused) {
            video.play();
            playBtn.classList.add('hidden');
        }
    }
    video.onclick = function() {
        if (video.play) {
            video.pause();
            playBtn.classList.remove('hidden');
        }
    }
}

function popup() {
    let body = document.querySelector('body');
    let video = document.getElementById('player-popup');
    let showBtn = document.getElementById('watch');
    let popup = document.getElementById('popup');

    showBtn.onclick = function() {
        popup.classList.add('shown');
        video.play();
        body.classList.add('lock');
    }
    popup.onclick = function(event) {
        if ((!video.contains(event.target))) {
            popup.classList.remove('shown');
            video.pause();
            video.currentTime = 0;
            body.classList.remove('lock');
        }
    }
}

videoPlay();
popup();

