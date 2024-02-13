'use strict'

function onBallClick() {
    const elBall = document.querySelector('.ball')
    var ballSize = +elBall.innerText
    ballSize += 50
    if (ballSize > 400) ballSize = 100
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.style.lineHeight = ballSize + 'px'
    elBall.innerText = ballSize
}