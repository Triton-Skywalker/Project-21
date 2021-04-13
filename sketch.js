var Ball;
var Green_Base, Yellow_Base, Red_Base, Blue_Base;
var edge;
var sound;
function preload() {
    sound = loadSound('music.mp3')
}
function setup() {
    createCanvas(800,400);
    Green_Base = createSprite(100,390,180,20);
    Green_Base.shapeColor = 'green';
    Yellow_Base = createSprite(300,390,180,20);
    Yellow_Base.shapeColor = 'yellow';
    Red_Base = createSprite(500,390,180,20);
    Red_Base.shapeColor = 'red';
    Blue_Base = createSprite(700,390,180,20);
    Blue_Base.shapeColor = 'blue';
    Ball = createSprite(random(20,750),200,30,30);
    Ball.shapeColor = 'white';
    Ball.velocityX = 5;
    Ball.velocityY = 5;
}
function draw() { 
    background('gray');
    edge = createEdgeSprites();
    Ball.bounceOff(edge)
    sound.play()
    
    if(Ball.isTouching(Green_Base)) {
        Ball.shapeColor ='green'
        Ball.velocityX = 0
        Ball.velocityY = 0
    }
    if(Ball.isTouching(Yellow_Base)) {
        Ball.shapeColor ='yellow'
        Ball.bounceOff(Yellow_Base)
    }
    if(Ball.isTouching(Red_Base)) {
        Ball.shapeColor ='red'
        Ball.bounceOff(Red_Base)
    }
    if(Ball.isTouching(Blue_Base)) {
        Ball.shapeColor ='blue'
        Ball.bounceOff(Blue_Base)
    }

    drawSprites();
}
function Bounce_off(object1, object2) {
    if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
        object1.velocityX = object1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    }
}

function isTouching(object1,object2) {
    if (object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2 
    && object1.y - object2.y < object2.height/2 + object1.height/2 
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
        return true;
    }else{ 
        return false; 
    } 
}