let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black'

//dom of start and restart

let startBtn = document.querySelector('#start')
let restartBtn = document.querySelector('#restart')
let gameOver = false;
let score = 0
let intervalId = 0;
let isGameOver = false;

let trnrX = 300, trnrY =450
let random = Math.random() *5

let gengarX = Math.floor(Math.random() *200), gengarY = Math.floor(Math.random() *650) 
let gengarIncrX = 3, gengarIncrY = 3

let haunterX = Math.floor(Math.random() *400), haunterY = Math.floor(Math.random() *650)
let haunterIncrX = 3, haunterIncrY = 3

let gastlyX = Math.floor(Math.random() *600), gastlyY = Math.floor(Math.random() *650)
let gastlyIncrX = 3, gastlyIncrY = 3


let trnrIncrX = 1, trnrIncrY = 1;
let pkbllIncrX = 3, pkbllIncrY = 3; 

let isLeft = false, isRight = false, isUp = false, isDown = false;


// load images

let bgMain = new Image();
bgMain.src='./images/towerFloor1.png'

let trnr = new Image()
trnr.src='./images/ash1.png'

let pkbll = new Image ()
pkbll.src='./images/pkbll.png'

let gengar = new Image()
gengar.src='./images/gengar.png'

let haunter = new Image()
haunter.src='./images/haunter.png'

let gastly = new Image()
gastly.src='./images/gastly.png'


function drawBg() {
    
    ctx.drawImage(bgMain,-10, 0)
    
}
function drawTrnr() {
 ctx.drawImage(trnr,trnrX,trnrY)
}
function drawGngr() {
    ctx.drawImage(gengar,gengarX,gengarY) 
}
function drawHntr() {
    ctx.drawImage(haunter,haunterX,haunterY) 
}    
function drawGstl() {
    ctx.drawImage(gastly,gastlyX,gastlyY) 
}   

function draw() {
    
    drawBg()
    drawTrnr()
    drawGngr()
    drawHntr()
    drawGstl()
    // ctx.drawImage(pkbll, trnrX +31, trnrY+40)

}

function collisionGengar() {
    if(gengarX +gengar.width > canvas.width){
        gengarIncrX = - gengarIncrX
    }
    if(gengarY +gengar.height > canvas.height){
        gengarIncrY = - gengarIncrY
    }
    if(gengarX < 0){
        gengarIncrX = +4
        
    }
    if (gengarY <0){
        gengarIncrY = +4 
    }
}
function collisionHaunter() {
    if(haunterX +haunter.width > canvas.width){
        haunterIncrX = - haunterIncrX
    }
    if(haunterY +haunter.height > canvas.height){
        haunterIncrY = - haunterIncrY
    }
    if(haunterX < 0){
        haunterIncrX = +4
        
    }
    if (haunterY <0){
        haunterIncrY = +4 
    }
}
function collisionGastly() {
    if(gastlyX +gastly.width > canvas.width){
        gastlyIncrX = - gastlyIncrX
    }
    if(gastlyY +gastly.height > canvas.height){
        gastlyIncrY = - gastlyIncrY
    }
    if(gastlyX < 0){
        gastlyIncrX = +4
        
    }
    if (gastlyY <0){
        gastlyIncrY = +4 
    }
}


function animate (){

    ctx.clearRect(0,0,canvas.width,canvas.height)

    drawBg()
    drawTrnr()

    drawGngr()
    gengarX =gengarX +gengarIncrX
    gengarY =gengarY +gengarIncrY
    collisionGengar()

    drawHntr()
    haunterX =haunterX +haunterIncrX
    haunterY =haunterY +haunterIncrY
    collisionHaunter()

    drawGstl()
    gastlyX =gastlyX +gastlyIncrX
    gastlyY =gastlyY +gastlyIncrY
    collisionGastly()
    
    // right
    if (isRight && trnrX + trnr.width < canvas.width) {
        trnrX = trnrX + 8
    }
    // left
    if (isLeft && trnrX > 0) {
        trnrX = trnrX - 8
    }
    // up 
    if (isUp && trnrY + trnr.height < canvas.height) {
        trnrY = trnrY - 8
    }
    // down
    if (isDown && trnrY > 0) {
        trnrY = trnrY + 8
    }

    if (gameOver) {
        cancelAnimationFrame( intervalId )
        canvas.style.display = 'none'
        restartBtn.style.display = 'block'
        startAudio.pause()
        gameOverAudio.play()
    }
    else {
        intervalId = requestAnimationFrame(animate)
    }
    
}

function start() {
    canvas.style.display = 'block'
    restartBtn.style.display = 'none'
    startBtn.style.display = 'none'
    // startAudio.play()
    ctx.fillStyle = 'white'
    ctx.font = '22px Verdana'
    ctx.fillText(`Score: ${score}`, 30, 30)
    animate()
    // collisionGengar()
    // collisionHaunter()
    // collisionGastly()
}


window.addEventListener('load', () => {
    canvas.style.display = 'none'
    restartBtn.style.display = 'none'

    draw()    
    start()    
    
    document.addEventListener('keydown', (event) =>{
        if (event.code == 'ArrowRight') {
            isRight = true
            isLeft = false
            isUp = false
            isDown = false
        }
        else if (event.code == 'ArrowLeft') {
            isRight = false
            isLeft = true
            isUp = false
            isDown = false
        }
        else if (event.code == 'ArrowUp') {
            isRight = false
            isLeft = false
            isUp = true
            isDown = false
        }
         else if (event.code == 'ArrowDown') {
            isRight = false
            isLeft = false
            isUp = false
            isDown = true
        }
    })

    document.addEventListener('keyup', () =>{
        isRight = false
        isLeft = false
        isUp = false
        isDown = false
    })

    startBtn.addEventListener('click', () => {
        start()
    })

    //     // do something when the user clicks the restart button
    //     // reset the values in your game
    // restartBtn.addEventListener('click', () => {

    //     gameOver = false;
    //     score = 0
    //     start()
    //     })
})