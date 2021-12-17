function fullscreenBlock() {
    let width = document.body.clientWidth;
    let height = document.body.clientHeight;
    let fullscreen = document.querySelector("#fullscreen");

    fullscreen.style.width = width;
    fullscreen.style.height = height;
}

fullscreenBlock();