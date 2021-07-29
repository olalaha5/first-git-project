let videoBlock = document.querySelector('.video')
let container = document.querySelector('.video__container')
let btnPlay = document.querySelector('.video__btn-play')
let btnPause = document.querySelector('.video__btn-pause')
let help = document.querySelector('.video__help')
let video = document.querySelector('.video__video')


// alert(document.cli)
// if (video.clientWidth > document.clientWidth) {
//     video.width = `${container.clientWidth}`
// } else {
//     video.height = `${container.clientHeight}`
// }



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