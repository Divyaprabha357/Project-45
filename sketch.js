var wall1, wall2, earth1
var gameState=0
var chance=5
var planet3
function preload(){
	space= loadImage("Images/SpaceBg.jpg");
	white= loadImage("Images/white.jpg");
	earth = loadImage("Images/earth.png")
	rocket_img = loadImage("Images/rocket.png")

	planet1=loadImage("Images/planet4.png")
	planet2=loadImage("Images/planet5.png")
	planet2=loadImage("Images/planet7.png")

	asteriodImg=loadImage("Images/Asteriod.png")
}

function setup(){
	canvas = createCanvas(1530, 715)

	ground = createSprite(715,307.5);
	ground.addImage("ground",space);




	planet= createSprite(715, 700, 1530, 200)
	planet.addImage(earth)
	planet.scale= 5

	rocket= createSprite(715, 650, 200, 200)
	rocket.addImage(rocket_img)
	rocket.scale =0.25

	wall1= createSprite(150,350.80)
	wall1.addImage(white)
	wall1.scale=1.4

	wall2= createSprite(1356,350.80)
	wall2.addImage(white)
	wall2.scale=1.4

	asteriodGroup= new Group();
}
function draw(){
	drawSprites();
	

	if(gameState===0){
		textSize(40)
		fill("black")
		stroke("black")
		text('*Instructions*', 40, 51);

		fill("Black")
		stroke(255)
		textSize(25)
		text("~You have to dodge the",20, 100)
		text("the planets and asteriods ", 20,130 )
		text("in the way.", 20,160 )

		text("~Every time you hit a  ",20, 200)
		text("asteriod you lose one", 20,230 )
		text("chance.", 20,260 )

		text("~You need to collect the ",20, 300)
		text("golden stars to increase", 20,330 )
		text("chances.", 20,360 )		
	}

	if(keyDown("space")){
		gameState=1
	}

	if(gameState===1){
		planet.visible= false
		rocket.y=600
		ground.velocityY=2


		if (ground.y >715){
			ground.y = 307.5
		
		  }


		if(keyDown(RIGHT_ARROW)){
			rocket.x=rocket.x+20

		}
		if(keyDown(LEFT_ARROW)){
			rocket.x=rocket.x-20

		}
		SpawnAsteriod();

		if(asteriodGroup.isTouching(rocket)){
			asteriodGroup.destroyEach();
			chance= chance-1
		}
	}

	textSize(24)
	text(mouseX + "," + mouseY,10, 45)
	textSize(30)
	fill("Yellow");
	stroke("Yellow")
	text("Chance :"+chance,375, 30)
	
}
function SpawnAsteriod(){
	if(frameCount%300 === 0){
		var asteriod = createSprite(600,0,40,10);
		asteriod .x = Math.round(random(350,1110));
		asteriod .addImage(asteriodImg);
		asteriod .scale = 0.25;
		asteriod .velocityY = 2.9;

		asteriodGroup.add(asteriod);

		
	}
}
