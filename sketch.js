var ball
function setup() {
  createCanvas(600, 600);
  ball = createSprite(200, 200, 20, 20)
  ball.shapeColor = 'orange'
}

function draw() {
  background(30);
  if (keyDown('right')) {
    ball.x = ball.x + 10
  }
  if (keyDown('left')) {
    ball.x = ball.x - 10
  }
  drawSprites()
}




