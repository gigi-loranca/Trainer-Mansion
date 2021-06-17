let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black'

//dom of start and restart

let startBtn = document.querySelector('#start')
let restartBtn = document.querySelector('#restart')
let startScreen = document.querySelector('#startscreen')
let scoreAm = document.querySelector('#score')



// game audios
let startAudio = new Audio('sound/Pokemon Route 3.mp3')
startAudio.volume = 0.1

let gameAudio = new Audio('sound/lavender loop.mp3')
gameAudio.volume = 0.3


let gameOverAudio = new Audio('sound/gameOver.mp3')
gameOverAudio.volume = 0.1

let hitAudio = new Audio('sound/hit.mp3')
hitAudio.volume = 0.1


let gameOver = false;
let score = 0
let finalScore = 0
let intervalId = 0;


let random = (Math.random() *5)

let trnrX = 308, trnrY =610
let pkbllX = trnrX +31, pkbllY = trnrY +40;
let arrPkbll = []
let incrPkbll  = 10 

let pikaX = Math.floor(Math.random() *200) +50, pikaY =Math.floor(Math.random() *200) +50;
let pikaIncrX = -3 , pikaIncrY = 0


let gengarX = Math.floor(Math.random() *200) +50 , gengarY = 0 
let gengarIncrX = 4, gengarIncrY = 4

let haunterX = Math.floor(Math.random() *400) +50, haunterY = 0
let haunterIncrX = -4, haunterIncrY = 4

let gastlyX = Math.floor(Math.random() *600) -50, gastlyY = 0
let gastlyIncrX = 4, gastlyIncrY = -4


let trnrIncrX = 10, trnrIncrY = 10;

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
    capOne = ctx.drawImage(cap,660,350)
    // capTwo = ctx.drawImage(cap,590,40)
    // capThr = ctx.drawImage(cap,630,40)
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



// GAMEOVER COLLISSION

function gameOv1(){
    if (trnrX + trnr.width >= gengarX && trnrX <= gengarX + gengar.width && 
        ((trnrY + trnr.width <= gengarY + gengar.height && trnrY + trnr.width >= gengarY ) || 
        (trnrY + trnr.height + trnr.width >= gengarY +50 &&  trnrY + trnr.height + trnr.width <= gengarY + gengar.height + 50))) {
        gameOver = true
        gameAudio.pause()
        gameOverAudio.play()

    }
}
function gameOv2(){
    if (trnrX + trnr.width >= haunterX && trnrX <= haunterX + haunter.width && 
        ((trnrY + trnr.width <= haunterY + haunter.height && trnrY + trnr.width >= haunterY ) || 
        (trnrY + trnr.height + trnr.width >= haunterY +50 &&  trnrY + trnr.height + trnr.width <= haunterY + haunter.height + 50))) {
        gameOver = true
        gameAudio.pause()
        gameOverAudio.play()
    } 
   
}
function gameOv3(){
    if (trnrX + trnr.width >= gastlyX && trnrX <= gastlyX + gastly.width && 
        ((trnrY + trnr.width <= gastlyY + gastly.height && trnrY + trnr.width >= gastlyY ) || 
        (trnrY + trnr.height + trnr.width >= gastlyY +50 &&  trnrY + trnr.height + trnr.width <= gastlyY + gastly.height + 50))) {
        gameOver = true
        gameAudio.pause()
        gameOverAudio.play()
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
        trnrX = trnrX + 16
    }
    // left trnr
    if (isLeft && trnrX > 0) {
        trnrX = trnrX - 16
    }
    // up trnr
    if (isUp && trnrY > 0) {
        trnrY = trnrY - 16
    }
    // downtrnr
    if (isDown && trnrY < canvas.height - trnr.height) {
        trnrY = trnrY + 16
    }

   
   
   
    // PKBLL SHOOT SCORE++

   function catchGengar() {
    // isD gengar
    for (let i = 0; i < arrPkbll.length; i++) {

        ctx.drawImage(pkbll, arrPkbll[i].x+31, arrPkbll[i].y+40);
        

     if (isD) {arrPkbll[i].x += incrPkbll} 
     if (arrPkbll[i].x + pkbll.width >= gengarX && arrPkbll[i].x <= gengarX + gengar.width && 
        ((arrPkbll[i].y + pkbll.width <= gengarY + gengar.height && arrPkbll[i].y + pkbll.width >= gengarY ) || 
        (arrPkbll[i].y + pkbll.height + pkbll.width >= gengarY +50 &&  arrPkbll[i].y + pkbll.height + pkbll.width <= gengarY + gengar.height + 50))) {
            score += 30 
            arrPkbll.splice(i,1)
            hitAudio.play()
        }
     else if (arrPkbll.length > 1) {arrPkbll.splice(i,1)} 
    }
    // isA gengar 
    for (let i = 0; i < arrPkbll.length; i++) {

        ctx.drawImage(pkbll, arrPkbll[i].x+31, arrPkbll[i].y+40);
        

     if (isA) {arrPkbll[i].x -= incrPkbll}
     if (arrPkbll[i].x + pkbll.width >= gengarX && arrPkbll[i].x <= gengarX + gengar.width && 
        ((arrPkbll[i].y + pkbll.width <= gengarY + gengar.height && arrPkbll[i].y + pkbll.width >= gengarY ) || 
        (arrPkbll[i].y + pkbll.height + pkbll.width >= gengarY +50 &&  arrPkbll[i].y + pkbll.height + pkbll.width <= gengarY + gengar.height + 50))) {
            score += 30 
            arrPkbll.splice(i,1)
            hitAudio.play()
        }
        else if (arrPkbll.length > 1) {arrPkbll.splice(i,1)} 
    }
    //  isW gengar
    for (let i = 0; i < arrPkbll.length; i++) {

        ctx.drawImage(pkbll, arrPkbll[i].x+31, arrPkbll[i].y+40);
        

     if (isW) {arrPkbll[i].y -= incrPkbll}
     if (arrPkbll[i].x + pkbll.width >= gengarX && arrPkbll[i].x <= gengarX + gengar.width && 
        ((arrPkbll[i].y + pkbll.width <= gengarY + gengar.height && arrPkbll[i].y + pkbll.width >= gengarY ) || 
        (arrPkbll[i].y + pkbll.height + pkbll.width >= gengarY +50 &&  arrPkbll[i].y + pkbll.height + pkbll.width <= gengarY + gengar.height + 50))) {
            score += 30 
            arrPkbll.splice(i,1)
            hitAudio.play()
        }
        else if (arrPkbll.length > 1) {arrPkbll.splice(i,1)} 
    }
    // isS gengar
    for (let i = 0; i < arrPkbll.length; i++) {

        ctx.drawImage(pkbll, arrPkbll[i].x+31, arrPkbll[i].y+40);
        

     if (isS) {arrPkbll[i].y += incrPkbll}
     if (arrPkbll[i].x + pkbll.width >= gengarX && arrPkbll[i].x <= gengarX + gengar.width && 
        ((arrPkbll[i].y + pkbll.width <= gengarY + gengar.height && arrPkbll[i].y + pkbll.width >= gengarY ) || 
        (arrPkbll[i].y + pkbll.height + pkbll.width >= gengarY +50 &&  arrPkbll[i].y + pkbll.height + pkbll.width <= gengarY + gengar.height + 50))) {
            score += 30 
            arrPkbll.splice(i,1)
            hitAudio.play()
        }
        else if (arrPkbll.length > 1) {arrPkbll.splice(i,1)} 
    }
  
    }
    catchGengar()
   function catchHaunter() {
    // isD haunter
    for (let i = 0; i < arrPkbll.length; i++) {

        ctx.drawImage(pkbll, arrPkbll[i].x+31, arrPkbll[i].y+40);
        

     if (isD) {arrPkbll[i].x += incrPkbll} 
     if (arrPkbll[i].x + pkbll.width >= haunterX && arrPkbll[i].x <= haunterX + haunter.width && 
        ((arrPkbll[i].y + pkbll.width <= haunterY + haunter.height && arrPkbll[i].y + pkbll.width >= haunterY ) || 
        (arrPkbll[i].y + pkbll.height + pkbll.width >= haunterY +50 &&  arrPkbll[i].y + pkbll.height + pkbll.width <= haunterY + haunter.height + 50))) {
            score += 30 
            arrPkbll.splice(i,1)
            hitAudio.play()
        }
     else if (arrPkbll.length > 1) {arrPkbll.splice(i,1)} 
    }
    // isA haunter 
    for (let i = 0; i < arrPkbll.length; i++) {

        ctx.drawImage(pkbll, arrPkbll[i].x+31, arrPkbll[i].y+40);
        

     if (isA) {arrPkbll[i].x -= incrPkbll}
     if (arrPkbll[i].x + pkbll.width >= haunterX && arrPkbll[i].x <= haunterX + haunter.width && 
        ((arrPkbll[i].y + pkbll.width <= haunterY + haunter.height && arrPkbll[i].y + pkbll.width >= haunterY ) || 
        (arrPkbll[i].y + pkbll.height + pkbll.width >= haunterY +50 &&  arrPkbll[i].y + pkbll.height + pkbll.width <= haunterY + haunter.height + 50))) {
            score += 30 
            arrPkbll.splice(i,1)
            hitAudio.play()
        }
        else if (arrPkbll.length > 1) {arrPkbll.splice(i,1)} 
    }
    //  isW haunter
    for (let i = 0; i < arrPkbll.length; i++) {

        ctx.drawImage(pkbll, arrPkbll[i].x+31, arrPkbll[i].y+40);
        

     if (isW) {arrPkbll[i].y -= incrPkbll}
     if (arrPkbll[i].x + pkbll.width >= haunterX && arrPkbll[i].x <= haunterX + haunter.width && 
        ((arrPkbll[i].y + pkbll.width <= haunterY + haunter.height && arrPkbll[i].y + pkbll.width >= haunterY ) || 
        (arrPkbll[i].y + pkbll.height + pkbll.width >= haunterY +50 &&  arrPkbll[i].y + pkbll.height + pkbll.width <= haunterY + haunter.height + 50))) {
            score += 30 
            arrPkbll.splice(i,1)
            hitAudio.play()
        }
        else if (arrPkbll.length > 1) {arrPkbll.splice(i,1)} 
    }
    // isS haunter
    for (let i = 0; i < arrPkbll.length; i++) {

        ctx.drawImage(pkbll, arrPkbll[i].x+31, arrPkbll[i].y+40);
        

     if (isS) {arrPkbll[i].y += incrPkbll}
     if (arrPkbll[i].x + pkbll.width >= haunterX && arrPkbll[i].x <= haunterX + haunter.width && 
        ((arrPkbll[i].y + pkbll.width <= haunterY + haunter.height && arrPkbll[i].y + pkbll.width >= haunterY ) || 
        (arrPkbll[i].y + pkbll.height + pkbll.width >= haunterY +50 &&  arrPkbll[i].y + pkbll.height + pkbll.width <= haunterY + haunter.height + 50))) {
            score += 30 
            arrPkbll.splice(i,1)
            hitAudio.play()
        }
        else if (arrPkbll.length > 1) {arrPkbll.splice(i,1)} 
    }
  
    }
    catchHaunter()
    function catchgastly() {
        // isD gastly
        for (let i = 0; i < arrPkbll.length; i++) {
    
            ctx.drawImage(pkbll, arrPkbll[i].x+31, arrPkbll[i].y+40);
            
    
         if (isD) {arrPkbll[i].x += incrPkbll} 
         if (arrPkbll[i].x + pkbll.width >= gastlyX && arrPkbll[i].x <= gastlyX + gastly.width && 
            ((arrPkbll[i].y + pkbll.width <= gastlyY + gastly.height && arrPkbll[i].y + pkbll.width >= gastlyY ) || 
            (arrPkbll[i].y + pkbll.height + pkbll.width >= gastlyY +50 &&  arrPkbll[i].y + pkbll.height + pkbll.width <= gastlyY + gastly.height + 50))) {
                score += 30 
                arrPkbll.splice(i,1)
                hitAudio.play()
            }
         else if (arrPkbll.length > 1) {arrPkbll.splice(i,1)} 
        }
        // isA gastly 
        for (let i = 0; i < arrPkbll.length; i++) {
    
            ctx.drawImage(pkbll, arrPkbll[i].x+31, arrPkbll[i].y+40);
            
    
         if (isA) {arrPkbll[i].x -= incrPkbll}
         if (arrPkbll[i].x + pkbll.width >= gastlyX && arrPkbll[i].x <= gastlyX + gastly.width && 
            ((arrPkbll[i].y + pkbll.width <= gastlyY + gastly.height && arrPkbll[i].y + pkbll.width >= gastlyY ) || 
            (arrPkbll[i].y + pkbll.height + pkbll.width >= gastlyY +50 &&  arrPkbll[i].y + pkbll.height + pkbll.width <= gastlyY + gastly.height + 50))) {
                score += 30 
                arrPkbll.splice(i,1)
                hitAudio.play()
            }
            else if (arrPkbll.length > 1) {arrPkbll.splice(i,1)} 
        }
        //  isW gastly
        for (let i = 0; i < arrPkbll.length; i++) {
    
            ctx.drawImage(pkbll, arrPkbll[i].x+31, arrPkbll[i].y+40);
            
    
         if (isW) {arrPkbll[i].y -= incrPkbll}
         if (arrPkbll[i].x + pkbll.width >= gastlyX && arrPkbll[i].x <= gastlyX + gastly.width && 
            ((arrPkbll[i].y + pkbll.width <= gastlyY + gastly.height && arrPkbll[i].y + pkbll.width >= gastlyY ) || 
            (arrPkbll[i].y + pkbll.height + pkbll.width >= gastlyY +50 &&  arrPkbll[i].y + pkbll.height + pkbll.width <= gastlyY + gastly.height + 50))) {
                score += 30 
                arrPkbll.splice(i,1)
                hitAudio.play()
            }
            else if (arrPkbll.length > 1) {arrPkbll.splice(i,1)} 
        }
        // isS gastly
        for (let i = 0; i < arrPkbll.length; i++) {
    
            ctx.drawImage(pkbll, arrPkbll[i].x+31, arrPkbll[i].y+40);
            
    
         if (isS) {arrPkbll[i].y += incrPkbll}
         if (arrPkbll[i].x + pkbll.width >= gastlyX && arrPkbll[i].x <= gastlyX + gastly.width && 
            ((arrPkbll[i].y + pkbll.width <= gastlyY + gastly.height && arrPkbll[i].y + pkbll.width >= gastlyY ) || 
            (arrPkbll[i].y + pkbll.height + pkbll.width >= gastlyY +50 &&  arrPkbll[i].y + pkbll.height + pkbll.width <= gastlyY + gastly.height + 50))) {
                score += 30 
                arrPkbll.splice(i,1)
                hitAudio.play()
            }
            else if (arrPkbll.length > 1) {arrPkbll.splice(i,1)} 
        }
      
    }
    catchgastly()

    finalScore = +score
    

    gameOv1()
    gameOv2()
    gameOv3()

    if (gameOver) {
        cancelAnimationFrame( intervalId )
        canvas.style.display = 'none'
        restartBtn.style.display = 'block'
        startScreen.style.display = 'block'

        startAudio.pause()
        gameAudio.pause()
        gameOverAudio.play()

        finalScore = +score
        scoreAm.innerHTML = `SCORE [ ${finalScore}]`
        

        ctx.fillStyle = 'white'
        ctx.font = '30px Verdana'
        ctx.fillText(`Score: ${score}`, 30, 30)

        gameAudio.pause()
        gameOverAudio.play()
    }
    else {
        intervalId = requestAnimationFrame(animate)
    }
    
}

function start() {
    startScreen.style.display = 'none'
    canvas.style.display = 'block'
    restartBtn.style.display = 'none'
    startBtn.style.display = 'none'
    // startAudio.play()

    startAudio.pause()
    gameAudio.play()     
    
    ctx.fillStyle = 'white'
    ctx.font = '30px Verdana'
    ctx.fillText(`Score: ${score}`, 30, 30)

    draw()
    
    animate()
    
}

window.addEventListener('load', () => {
    startAudio.play()
    canvas.style.display = 'none'
    restartBtn.style.display = 'none'

    
    // trainer movement event
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
    // pkbll throw event
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

        gameOver = false
        score = 0
        trnrX = 308, trnrY =610
        gengarX = Math.floor(Math.random() *200) +50 , gengarY = 0 
        haunterX = Math.floor(Math.random() *400) +50, haunterY = 0
        gastlyX = Math.floor(Math.random() *600) -50, gastlyY = 0

        scoreAm.style.display = 'none'

        startAudio.pause()
        gameOverAudio.pause()
        

        start()
        
        })
})
