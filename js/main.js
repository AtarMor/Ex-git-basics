'use strict'

function onBallClick(elBall, maxDiameter) {
    var ballSize = +elBall.innerText
    const addSize = getRandomInt(20, 60)
    ballSize += addSize
    if (ballSize > maxDiameter) ballSize = 100

    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.style.lineHeight = ballSize + 'px'
    elBall.innerText = ballSize

    elBall.style.backgroundColor = getRandomColor()
}