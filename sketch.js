var ballImage,paddleImage;
function preload() {
  /* preload your images here of the ball and the paddle */
ballImage= loadImage("ball.png");
paddleImage= loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball= createSprite(40,200,20,100);
  paddle= createSprite(350,200,20,100);
  /* assign the images to the sprites */
  ball.addImage(ballImage, "ball.png");
  paddle.addImage(paddleImage, "paddle.png");
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX= 9;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites(); //Bounce Off the Left Edge only  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(paddle);
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]); 
  ball.bounceOff(edges[3]);
  paddle.collide(edges);
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.velocityY= -4;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.velocityY= 4;
  }
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY= random(10,20);
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

