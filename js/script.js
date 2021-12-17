function fullscreenBlock() {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    let fullscreen = document.querySelector("#fullscreen");

    fullscreen.style.width = width + "px";
    fullscreen.style.height = height + "px";
}

fullscreenBlock();
window.onresize = fullscreenBlock;