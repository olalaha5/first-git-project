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
    if (n != i) {
        for (let j = 0; j < document.querySelectorAll('.our-team__inner').length; j++) {
            document.querySelectorAll('.our-team__inner')[j].style.opacity = '0';
            setTimeout(() => {
                document.querySelectorAll('.our-team__inner')[j].style.display = 'none';
            }, 250);
        };
        setTimeout(() => {
            document.querySelectorAll('.our-team__inner')[i > 3 ? i - 2 : i].style.display = 'flex';
            setTimeout(() => {
                document.querySelectorAll('.our-team__inner')[i > 3 ? i - 2 : i].style.opacity = '1';
            }, 10); 
            positionTriangle(n)
        }, 250);
    }
    n = i;
    if (document.documentElement.clientWidth < 561) {
        if (n < 2) positionTriangleTop(document.querySelectorAll('.our-team__card')[n]);
        else positionTriangleBottom(document.querySelectorAll('.our-team__card')[n]);
    } else {
        positionTriangleTop(document.querySelectorAll('.our-team__card')[n]);
    };
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
    triangle.style.top = `${document.querySelector('.our-team__container').offsetHeight - 40}px`;
    console.log(document.querySelector('.our-team__container').offsetHeight)
}

window.addEventListener('load', () => {
    positionTriangle(0)
    for (let i = 0; i < document.querySelectorAll('.our-team__inner').length; i++) {
        document.querySelectorAll('.our-team__inner')[i].style.display = 'none';
    };
    document.querySelectorAll('.our-team__inner')[0].style.display = 'flex';
});

window.addEventListener('resize', () => {
    positionTriangle(n)
});

for (let i = 0; i < document.querySelectorAll('.our-team__card').length; i++) {
    document.querySelectorAll('.our-team__card')[i].addEventListener('click', () => positionTriangle(i))
}