var birdImg, rabbit, land, coin;
let score = 0

function preload(){
  birdImg = loadImage('assert/rabbit.png')
}

function setup() {
  createCanvas(800, 400);
  rabbit = createSprite(100,100,50,50);
  rabbit.addImage('default',birdImg);
  rabbit.maxSpeed = 5;
  rabbit.mouseActive = true;
  
  
  coins = new Group();
  for (let i = 0; i < 10; i++) {
    let c = createSprite(
      random(100, width-100),
      random(100, height-100),
      10,10);
    c.shapeColor = color(235, 79, 52);
    coins.add(c);
  }
  
  land = createSprite(100,400,1500,20)
  land.shapeColor = color(195, 235, 52)
}

function draw() {
  background(220,255,255);
  fill(0);
  noStroke();
  textSize(22);
  text("Eat all Carrots",width/2 - 65,30)
  drawSprites();
  rabbit.velocity.y += 0.1
  rabbit.collide(land);
  rabbit.overlap(coins,getCarrot);
  if(keyWentDown('w')){
    rabbit.velocity.y = -5
  }
  if(keyDown('a')){
    if(rabbit.position.x >= 1 && rabbit.position.x <= 800){
      rabbit.position.x -= 1
    }
  }
  if(keyDown('d')){
    if(rabbit.position.x >= 1 && rabbit.position.x <= 800){
      rabbit.position.x += 1
    }
  }
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  if (coins.length > 0) {
    text(score, width/2, height/2);
  }
  else {
    text("you win!", width/2, height/2);
  }
}

function getCarrot(rabbit,coins){
  coins.remove();
  score += 1
}