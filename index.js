let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black'

//dom of start and restart

let startBtn = document.querySelector('#start')
let restartBtn = document.querySelector('#restart')
let gameOver = false;
let score = null
let intervalId = 0;
let isGameOver = false;

let trnrX = 300, trnrY =450
let gengarX = 510, gengarY = 200 ;
// let haunterX = 300, haunterY =150;
// let gastlyX = 35, gastlyY = 200

let trnrIncrX = 1, trnrIncrY = 1;
let pkmIncrX = 2 , pkmIncrY = 2;
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


function draw () {
    
    ctx.drawImage(bgMain, -10, 0)

    ctx.drawImage(trnr,trnrX, trnrY)

    ctx.drawImage(gengar, gengarX,gengarY)   
    // ctx.drawImage(haunter,haunterX,haunterX) 
    // ctx.drawImage(gastly,gastlyX,gastlyY) 
    
    // ctx.drawImage(pkbll, trnrX +31, trnrY+40)


    // if (gameOver) {
    //     cancelAnimationFrame(intervalId)
    // }
    // else {
    //     intervalId = requestAnimationFrame()
    // }

}

function animate (){

    // right 
    if (isRight && trnrX + trnr.width < canvas.width) {
        trnrX = trnrX + 5
        console.log('hellllloooo')
    }
    // left
    if (isLeft && trnrX > 0) {
        trnrX = trnrX - 5
    }
    // up 
    if (isUp && trnrY + trnr.height < canvas.height) {
        trnrY = trnrY + 5
    }
    // down
    if (isDown && trnrY > 0) {
        trnrX = trnrX - 5
    }
    
}

function start() {
    canvas.style.display = 'block'
    restartBtn.style.display = 'none'
    startBtn.style.display = 'none'
    animate()
    // startAudio.play()
    ctx.fillStyle = 'white'
    ctx.font = '22px Verdana'
    ctx.fillText(`Score: ${score}`, 30, 30)
}


window.addEventListener('load', () => {

    draw()    
    
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


} )