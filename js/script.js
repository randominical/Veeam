function videoPlay() {
    let videoPage = document.getElementById('player');
    let playBtn = document.getElementById('play');
    let dark = document.getElementById('dark');
    let body = document.querySelector('body');
    let video = document.getElementById('player-popup');
    let showBtn = document.getElementById('watch');
    let popup = document.getElementById('popup');

    playBtn.onclick = function() {
        if (video.paused) {
            videoPage.play();
            playBtn.classList.add('hidden');
            dark.classList.remove('shown');
        }
    }
    videoPage.onclick = function() {
        if (videoPage.play) {
            videoPage.pause();
            playBtn.classList.remove('hidden');
            dark.classList.add('shown');
        }
    }
    showBtn.onclick = function() {
        popup.classList.add('shown');
        video.play();
        body.classList.add('lock');
        if (videoPage.play) {
            videoPage.pause();
            dark.classList.add('shown');
            playBtn.classList.remove('hidden');
        }
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