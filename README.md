# Project's name
[Link Deploy](http://github.com)


## Description
Trainer Mansion is a game involving a famous trainer from Pokemon catching a swarm
of spooky ghost pokemon.
​
The trainer moves up, down, left and right inside the pokemon mansion.
​
The trainer must catch the ghost pokemon to build score.
​
pokemon caught have different values that add to the score.
Game over when a pokemon has collided with thetrainer

## MVP
- Trainer moves inside the arena
- Different types of pokemon spawn on the board
- Trainer throws pokeballs depending on its orientation
- pokemon are caught when collision with pokeball occurs
- Pokemon grant different scores when caught
- Game over when a pokemon collides with the trainer 



## Backlog
a Pikachu that increases lives
a Snorlax that serves as an obstacle on the board
​
Abbility to choose among various different trainers with different specs
add 'cath rate mechanic'


## Data structure

buildSplashScreen () {}
buildGameScreen () {}
buildGameOverScreen () {}


Game () {}
starLoop () {}
checkCollisions () {}
addTentacle () {}
clearCanvas () {}
updateCanvas () {}
drawCanvas () {}
GameOver () {}


## States & States Transitions


- splashScreen
- gameScreen
- gameoverScreen
- winScreen


## Task

main - buildDom
main - buildSplashScreen
main - buildGameScreen
main - buildGameOverScreen
main - addEventListener

gameItems - draw

gameIt - startLoop
gameIt - buildCanvas
gameIt - drawCanvas

pokemon  - draw
pokemon  - move
trainer - draw
trainer - move
trainer - pkbll throw
pkbll - draw
pkbll - move

game - catch pkmn
game - GameOver


## Additional Links


### Trello
[Link url](https://trello.com)


### Slides
[Link Slides.com](http://slides.com)