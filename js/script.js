function fullscreenBlock() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let fullscreen = document.querySelector("#fullscreen");

    fullscreen.style.width = width + "px";
    fullscreen.style.height = height + "px";
}

fullscreenBlock();
window.onresize = fullscreenBlock;