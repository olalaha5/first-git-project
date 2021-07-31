let videoBlock = document.querySelector('.video')
let container = document.querySelector('.video__container')
let btnPlay = document.querySelector('.video__btn-play')
let btnPause = document.querySelector('.video__btn-pause')
let help = document.querySelector('.video__help')
let video = document.querySelector('.video__video')


btnPlay.addEventListener('click', () => {
    video.play();
    btnPlay.style.display = 'none';
    btnPause.style.display = 'inline-block';
    help.innerHTML = 'Click to pause the video'
});

btnPause.addEventListener('click', () => {
    video.pause();
    btnPlay.style.display = 'inline-block';
    btnPause.style.display = 'none';
    help.innerHTML = 'Click to play the video'
});

// ------------------------------------------------

let n = 0
function positionTriangle(i) {
    n = i;
    if (document.documentElement.clientWidth < 561) {
        if (n < 2) positionTriangleTop(document.querySelectorAll('.our-team__card')[n]);
        else positionTriangleBottom(document.querySelectorAll('.our-team__card')[n]);
    } else {
        positionTriangleTop(document.querySelectorAll('.our-team__card')[n]);
    }
}

function positionTriangleTop(elem) {
    let triangle = document.querySelector('.our-team__triangle');
    triangle.style.transform = 'rotate(0deg)';
    triangle.style.left = `${elem.offsetWidth / 2 + elem.offsetLeft - 40}px`;
    triangle.style.top = '-69px';
}

function positionTriangleBottom(elem) {
    let triangle = document.querySelector('.our-team__triangle');
    triangle.style.transform = 'rotate(180deg)';
    triangle.style.left = `${elem.offsetWidth / 2 + elem.offsetLeft - 40}px`;
    triangle.style.top = `${document.querySelector('.our-team__container').offsetHeight + 68}px`;
}

window.addEventListener('load', () => {
    positionTriangle(0)
});

window.addEventListener('resize', () => {
    positionTriangle(n)
});

for (let i = 0; i < document.querySelectorAll('.our-team__card').length; i++) {
    document.querySelectorAll('.our-team__card')[i].addEventListener('click', () => positionTriangle(i))
}

