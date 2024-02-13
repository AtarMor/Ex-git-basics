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

function onBall3Click() {
    const elBall1 = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')
    onBallClick(elBall1, 400)
    onBallClick(elBall2, 300)
}

function onBall4Click() {
    const elBall1 = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')
    shrinkBall(elBall1, 100)
    shrinkBall(elBall2, 100)
}

function shrinkBall(elBall, minDiameter) {
    var ballSize = +elBall.innerText
    const reduceSize = getRandomInt(20, 60)
    ballSize -= reduceSize
    if (ballSize < minDiameter) return

    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.style.lineHeight = ballSize + 'px'
    elBall.innerText = ballSize
}   

function onBall5Click() {
    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = getRandomColor()
}

function onBall6Click() {
    const elBall1 = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')
    elBall1.style.width = elBall2.style.width = '100px'
    elBall1.style.height = elBall2.style.height = '100px'
    elBall1.style.lineHeight = elBall2.style.lineHeight = '100px'

    elBall1.style.backgroundColor = 'rgb(222, 170, 239)'
    elBall2.style.backgroundColor = 'rgb(139, 160, 218)'
}