'use strict'

function onBallClick() {
    const elBall = document.querySelector('.ball')
    var ballSize = +elBall.innerText
    ballSize += 50
    console.log(ballSize + 'px');
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerText = ballSize
}