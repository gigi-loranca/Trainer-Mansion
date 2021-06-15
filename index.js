let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black'

//dom of start and restart

let startBtn = document.querySelector('#start')
let restartBtn = document.querySelector('#restart')
let gameOver = false;
let score = 0
let lives = 3
let intervalId = 0;
let isGameOver = false;

let random = (Math.random() *5)

let trnrX = 308, trnrY =610
let pkbllX = trnrX +31, pkbllY = trnrY +40;
let arrPkbll = []
let incrPkbll  = 10 

let gengarX = Math.floor(Math.random() *200), gengarY = Math.floor(Math.random() *200) 
let gengarIncrX = 3, gengarIncrY = 3

let haunterX = Math.floor(Math.random() *400), haunterY = Math.floor(Math.random() *400)
let haunterIncrX = -3, haunterIncrY = 3

let gastlyX = Math.floor(Math.random() *600), gastlyY = Math.floor(Math.random() *600)
let gastlyIncrX = 3, gastlyIncrY = -3


let trnrIncrX = 1, trnrIncrY = 1;

let isLeft = false, isRight = false, isUp = false, isDown = false;
let isA = false, isD = false, isW = false, isS = false;


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

let cap = new Image()
cap.src='./images/cap.png'

function drawBg() {
    ctx.drawImage(bgMain,-10, 0)
}
function drawScore() {
    ctx.fillStyle = 'white'
    ctx.font = '30px Verdana'
    ctx.fillText(`Score: ${score}`, 30, 30)
}
function drawLives() {
    ctx.fillStyle = 'white'
    ctx.font = '30px Verdana'
    ctx.fillText(`Lives `, 550, 30)
}
function drawPika () {
    capOne = ctx.drawImage(cap,550,40)
    capTwo = ctx.drawImage(cap,590,40)
    capThr = ctx.drawImage(cap,630,40)
}

function drawTrnr() {
 ctx.drawImage(trnr,trnrX,trnrY)
}
function drawPkbll() {
    ctx.drawImage(pkbll, trnrX+31, trnrY +40)
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
    drawScore()
    // drawPika()
    // drawLives()
    drawTrnr()
    drawGngr()
    drawHntr()
    drawGstl()
    drawPkbll()

}
// wall collsision
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

// SCORE COLLISIONS
function collPkbllGeng(){
    
    // right
    if (pkbllX == gengarX +gengar.width) {
        if (pkbllY +pkbll.height >= gengarY && pkbllY <= gengarY +gengar.height ){
            score += 30
        }
    }
    // left
    if (pkbllX + pkbll.width == gengarX) {
        if (pkbllY +pkbll.height >= gengarY && pkbllY <= gengarY +gengar.height ){
            score += 30
        }
    }
    // top
    if (pkbllY +pkbll.height == gengarY) {
        if (pkbllX + pkbll.width >= gengarX && pkbllX <= gengarX + gengar.width) {
            score += 30
        }
    }
    // bottom
    if (pkbllY == gengarY +gengar.height) {
        if (pkbllX + pkbll.width >= gengarX && pkbllX <= gengarX + gengar.width) {
            score += 30
        }
    }
}
function collPkbllHaun(){
    
    // right
    if (pkbllX == haunterX +haunter.width) {
        if (pkbllY +pkbll.height >= haunterY && pkbllY <= haunterY +haunter.height ){
            score += 20
        }
    }
    // left
    if (pkbllX + pkbll.width == haunterX) {
        if (pkbllY +pkbll.height >= haunterY && pkbllY <= haunterY +haunter.height ){
            score += 20
        }
    }
    // top
    if (pkbllY +pkbll.height == haunterY) {
        if (pkbllX + pkbll.width >= haunterX && pkbllX <= haunterX + haunter.width) {
            score += 20
        }
    }
    // bottom
    if (pkbllY == haunterY +haunter.height) {
        if (pkbllX + pkbll.width >= haunterX && pkbllX <= haunterX + haunter.width) {
            score += 20
        }
    }
   
}
function collPkbllGast(){
    
    // right
    if (pkbllX == gastlyX +gastly.width) {
        if (pkbllY +pkbll.height >= gastlyY && pkbllY <= gastlyY +gastly.height ){
            score += 10
        }
    }
    // left
    if (pkbllX + pkbll.width == gastlyX) {
        if (pkbllY +pkbll.height >= gastlyY && pkbllY <= gastlyY +gastly.height ){
            score += 10
        }
    }
    // top
    if (pkbllY +pkbll.height == gastlyY) {
        if (pkbllX + pkbll.width >= gastlyX && pkbllX <= gastlyX + gastly.width) {
            score += 10
        }
    }
    // bottom
    if (pkbllY == gastlyY +gastly.height) {
        if (pkbllX + pkbll.width >= gastlyX && pkbllX <= gastlyX + gastly.width) {
            score += 10
        }
    }
}

// GAMEOVER COLLISSION

function gameOv1(){
    
    // right
    if (trnrX == gengarX +gengar.width) {
        if (trnrY +trnr.height >= gengarY && trnrY <= gengarY +gengar.height ){
            gameOver = true
        }
    }
    // left
    else if (trnrX + trnr.width == gengarX) {
        if (trnrY +trnr.height >= gengarY && trnrY <= gengarY +gengar.height ){
            gameOver = true
        }
    }
    // top
    else if (trnrY +trnr.height == gengarY) {
        if (trnrX + trnr.width >= gengarX && trnrX <= gengarX + gengar.width) {
            gameOver = true
        }
    }
    // bottom
    else if(trnrY == gengarY +gengar.height) {
        if (trnrX + trnr.width >= gengarX && trnrX <= gengarX + gengar.width) {
            gameOver = true
        }
    }
}
function gameOv2(){
    
    // right
    if (trnrX == haunterX +haunter.width) {
        if (trnrY +trnr.height >= haunterY && trnrY <= haunterY +haunter.height ){
            gameOver = true
        }
    }
    // left
    if (trnrX + trnr.width == haunterX) {
        if (trnrY +trnr.height >= haunterY && trnrY <= haunterY +haunter.height ){
            gameOver = true
        }
    }
    // top
    if (trnrY +trnr.height == haunterY) {
        if (trnrX + trnr.width >= haunterX && trnrX <= haunterX + haunter.width) {
            gameOver = true
        }
    }
    // bottom
    if (trnrY == haunterY +haunter.height) {
        if (trnrX + trnr.width >= haunterX && trnrX <= haunterX + haunter.width) {
            gameOver = true
        }
    }
}
function gameOv3(){
    
    // right
    if (trnrX == gastlyX +gastly.width) {
        if (trnrY +trnr.height >= gastlyY && trnrY <= gastlyY +gastly.height ){
            gameOver = true
        }
    }
    // left
    if (trnrX + trnr.width == gastlyX) {
        if (trnrY +trnr.height >= gastlyY && trnrY <= gastlyY +gastly.height ){
            gameOver = true
        }
    }
    // top
    if (trnrY +trnr.height == gastlyY) {
        if (trnrX + trnr.width >= gastlyX && trnrX <= gastlyX + gastly.width) {
            gameOver = true
        }
    }
    // bottom
    if (trnrY == gastlyY +gastly.height) {
        if (trnrX + trnr.width >= gastlyX && trnrX <= gastlyX + gastly.width) {
            gameOver = true
        }
    }
}

// Animate function

function animate (){

    ctx.clearRect(0,0,canvas.width,canvas.height)

    draw()

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
    

    // TRNR Move
    // right trnr
    if (isRight && trnrX + trnr.width < canvas.width) {
        trnrX = trnrX + 8
    }
    // left trnr
    if (isLeft && trnrX > 0) {
        trnrX = trnrX - 8
    }
    // up trnr
    if (isUp && trnrY > 0) {
        trnrY = trnrY - 8
    }
    // downtrnr
    if (isDown && trnrY < canvas.height - trnr.height) {
        trnrY = trnrY + 8
    }

    // PKBLL SHOOT

    if (isD) {
        for (let i = 0; i < arrPkbll.length; i++) {
            ctx.drawImage(pkbll, arrPkbll[i].x+31, arrPkbll[i].y+40);
               
          arrPkbll[i].x += incrPkbll;
        //   console.log(arrPkbll)
             if (arrPkbll.length > 1) {
                 arrPkbll.splice(i,1)
             }

        }
        
    }    
    if (isA) {
        for (let i = 0; i < arrPkbll.length; i++) {
            ctx.drawImage(pkbll, arrPkbll[i].x+31, arrPkbll[i].y+40);
              
          arrPkbll[i].x -= incrPkbll;
          if (arrPkbll.length > 1) {
            arrPkbll.splice(i,1)
        }
          
        }
    }
    if (isW) {
        for (let i = 0; i < arrPkbll.length; i++) {
            ctx.drawImage(pkbll, arrPkbll[i].x+31, arrPkbll[i].y+40);          
          
            arrPkbll[i].y -= incrPkbll;
            if (arrPkbll.length > 1) {
                arrPkbll.splice(i,1)
            }
            
          
        }
    }
    if (isS) {
        for (let i = 0; i < arrPkbll.length; i++) {
            ctx.drawImage(pkbll, arrPkbll[i].x+31, arrPkbll[i].y+40);       
          arrPkbll[i].y += incrPkbll;
          if (arrPkbll.length > 1) {
            arrPkbll.splice(i,1)
        }
            
        }
    }

    collPkbllGeng()
    collPkbllHaun()
    collPkbllGast()

    gameOv1()
    gameOv2()
    gameOv3()

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
    ctx.font = '30px Verdana'
    ctx.fillText(`Score: ${score}`, 30, 30)

    // draw()
    
    animate()
    
}


window.addEventListener('load', () => {
    canvas.style.display = 'none'
    restartBtn.style.display = 'none'

    // draw()    
    start()
    
    // document.addEventListener('keydown', (event) => {
    //     if (event.code == 'keyD') {
    //         isD = true
    //         isA = false
    //         isW = false
    //         isS = false
    //     }
    //     else if (event.code == 'keyA') {
    //         isD = false
    //         isA = true
    //         isW = false
    //         isS = false
    //     }
    //     else if (event.code == 'keyW') {
    //         isD = false
    //         isA = false
    //         isW = true
    //         isS = false
    //     }
    //     else if (event.code == 'keyS') {
    //         isD = false
    //         isA = false
    //         isW = false
    //         isS = true
    //         console.log('trigger?')
    //     }
    // })
    // trainer movements
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
    document.addEventListener('keydown', (event) =>{
        // if (event.code == "KeyS") {
        //     arrayOfBalls.push({ x: scarletX + 50, y: scarletY + 20 });
        //     pressS = true;


        if (event.code == "KeyD") {
            arrPkbll.push({ x: trnrX , y: trnrY });
            isS = false
            isW = false
            isA = false
            isD = true
            }
         if (event.code == "KeyA") {
            arrPkbll.push({ x: trnrX , y: trnrY });
            isS = false
            isW = false
            isA = true
            isD = false
         }
         if (event.code == "KeyW") {
            arrPkbll.push({ x: trnrX , y: trnrY });
            isS = false
            isW = true
            isA = false
            isD = false
         }
         if (event.code == "KeyS") {
            arrPkbll.push({ x: trnrX , y: trnrY });
            isS = true
            isW = false
            isA = false
            isD = false
         }
    })

    document.addEventListener('keyup', () =>{
        isRight = false
        isLeft = false
        isUp = false
        isDown = false

        // isD = false
        // isA = false
        // isW = false
        // isS = false

    })


    startBtn.addEventListener('click', () => {
        start();
    })

    //     // do something when the user clicks the restart button
    //     // reset the values in your game
    restartBtn.addEventListener('click', () => {

          gameOver = false;
        score = 0
        start()
        })
})