let videoBlock = document.querySelector('.video');
let container = document.querySelector('.video__container');
let btnPlay = document.querySelector('.video__btn-play');
let btnPause = document.querySelector('.video__btn-pause');
let help = document.querySelector('.video__help');
let video = document.querySelector('.video__video');


btnPlay.addEventListener('click', () => {
    video.play();
    btnPlay.style.display = 'none';
    btnPause.style.display = 'inline-block';
    help.innerHTML = 'Click to pause the video';
});

btnPause.addEventListener('click', () => {
    video.pause();
    btnPlay.style.display = 'inline-block';
    btnPause.style.display = 'none';
    help.innerHTML = 'Click to play the video';
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
}

window.addEventListener('load', () => {
    positionTriangle(0);
    for (let i = 0; i < document.querySelectorAll('.our-team__inner').length; i++) {
        document.querySelectorAll('.our-team__inner')[i].style.display = 'none';
    };
    document.querySelectorAll('.our-team__inner')[0].style.display = 'flex';
});

window.addEventListener('resize', () => {
    positionTriangle(n);
});

for (let i = 0; i < document.querySelectorAll('.our-team__card').length; i++) {
    document.querySelectorAll('.our-team__card')[i].addEventListener('click', () => positionTriangle(i));
}


//---------------------------------------------------------

let menu = document.querySelector('.nav__list');
let menuButton = document.querySelector('.nav__icon');

window.addEventListener('click', (event) => {
    if (['nav__icon', 'svg__path'].includes(Array.from(event.path[0].classList)[0])) {
        menu.style.height = menu.style.height === '260px' ? '30px' : "260px";
    }
    else if (!['nav__list', 'nav__item'].includes(Array.from(event.path[0].classList)[0])) {
        if (menu.style.height === '260px') menu.style.height = '30px';
    }
});


//---------------------------------------------------------------------

let row = document.querySelector('.testimonials__row');
let nav = document.querySelectorAll('.testimonials__item');
let right = 0;

function slide() {
    row.style.right = `${right}vw`;
    for (let i = 0; i < nav.length; i++) {
        nav[i].classList.remove('testimonials__item_active');
    };
    nav[right / 100].classList.add('testimonials__item_active')
    right += 100;
    right = right % 600;
}
slide()
setInterval(slide, 10000);