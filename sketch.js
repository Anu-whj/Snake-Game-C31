let snake;
let rez = 20;
let food;
let w;
let h;
var score;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
  score = 0;
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  
  scale(rez);
  background(90,196,84);
  
  
  if (snake.eat(food)) {
    foodLocation();
    score++;
  }
  snake.update();
  snake.show();

  if (snake.endGame()) {
    background(255, 0, 0);
    textSize(2);
    text("Game Over", 5, 9);
    fill(0,255,255);
    noLoop();
    
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);

 
  

  textSize(1);
  text("Score: "+ score, 2, 3);
  fill(0, 102, 153);
  
}