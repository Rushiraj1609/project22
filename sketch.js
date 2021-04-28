var starImg,bgImg;
var star, starBody;
var fairy,fairy_moving;
var magicalStick,magicalStickImg;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	magicalStickImg=loadImage("magicalStick.png");
	fairy_moving=loadAnimation("fairyImage1.png","fairyImage2.png");
	music=loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	fairy=createSprite(354,300,10,10);
	fairy.addAnimation("moving",fairy_moving);
	fairy.scale=0.2;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	magicalStick=createSprite(90,660,10,10);
	magicalStick.addImage(magicalStickImg);
	magicalStick.scale=0.23;

   

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if (keyDown(LEFT_ARROW)) {
	fairy.x=fairy.x-6;
	
}

  if (keyDown(RIGHT_ARROW)) {
	fairy.x=fairy.x+6;
   }
  
   if(keyDown("space")){
	music.play();
}

  if(star.y>300 && starBody.position.y >300){
	  Matter.Body.setStatic(starBody,true);
	  star.x=star.x-6;
  }

 

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	
	
	
	
}
