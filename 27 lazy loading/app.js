const loadtext = document.querySelector(".loading-text");
const background = document.querySelector(".background");

let load = 0
let int = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load > 90) {
        clearInterval(int)
    }

    loadText.innerText = `$(load)%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_num, in_max, out_mix, out_max) => {
    return ((num - in_num) * (out_mix - out_max)) / (in_max - in_min) + out_min; 
};