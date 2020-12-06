var player,player_img;
var carrot1,carrot2,carrot3,carrot4,carrot5,carrot6,carrot7,carrot8,carrot9,carrot10;
var carrot11,carrot12,carrot13,carrot14,carrot15,carrot16,carrot17,carrot18,carrot19,carrot20;
var carrot21,carrot22,carrot23,carrot24,carrot25,carrot26,carrot27,carrot28,carrot29,carrot30;
var carrot31,carrot32,carrot33,carrot34,carrot35,carrot36,carrot37,carrot38,carrot39,carrot40;
var carrot_img;
var score = 0;
var maze;
var up,down,right,left;
var uparrow,downarrow,rightarrow,leftarrow;
var B1,B2,B3,B4,B5,B6,B7,B8,B9,B10;
var B11,B12,B13,B14,B15,B16,B17,B18,B19,B20;
var B21,B22,B23,B24,B25,B26,B27,B28,B29,B30;
var B31,B32,B33,B34,B35,B36,B37,B38,B39,B40;
var B41,B42;
var carrotA = [carrot1,carrot2,carrot3,carrot4,carrot5,carrot6,carrot7,carrot8,carrot9,carrot10,carrot11];

function preload(){
player_img = loadAnimation("bunny1.png","bunny2.png","bunny3.png","bunny4.png","bunny5.png","bunny6.png","bunny7.png");
carrot_img = loadImage("carrot.png");
maze = loadImage("maze.jpg");
up = loadImage("up_arrow.jpg");
down = loadImage("down_arrow.jpg");
right = loadImage("right_arrow.jpg");
left = loadImage("left_arrow.jpg");
}

function setup(){
createCanvas(displayWidth-200,displayHeight-200);

player=createSprite(displayHeight-700,displayHeight-250);
player.addAnimation("Bunny",player_img);

B1 = createSprite(displayWidth-1210,displayHeight-530,5,390);
B2 = createSprite(displayWidth-750,displayHeight-700,1125,5);
B3 = createSprite(displayWidth-255,displayHeight-300,5,690);
B4 = createSprite(displayWidth-650,displayHeight-220,1115,5);
B5 = createSprite(displayWidth-920,displayHeight-390,5,130);
B6 = createSprite(displayWidth-310,displayHeight-460,105,5);
B7 = createSprite(displayWidth-735,displayHeight-565,5,150);
B8 = createSprite(displayWidth-425,displayHeight-555,225,5);
B9 = createSprite(displayWidth-1210,displayHeight-335,5,125);
B10 = createSprite(displayWidth-640,displayHeight-535,5,120);

B11 = createSprite(displayWidth-340,displayHeight-500,175,5);
B12 = createSprite(displayWidth-635,displayHeight-280,5,125);
B13 = createSprite(displayWidth-535,displayHeight-565,5,265);
B14 = createSprite(displayWidth-990,displayHeight-315,125,5);
B15 = createSprite(displayWidth-520,displayHeight-355,150,5);
B16 = createSprite(displayWidth-400,displayHeight-410,115,5);
B17 = createSprite(displayWidth-1025,displayHeight-365,200,5);
B18 = createSprite(displayWidth-1035,displayHeight-510,350,5);
B19 = createSprite(displayWidth-675,displayHeight-410,300,5);
B20 = createSprite(displayWidth-335,displayHeight-335,5,125);

B21 = createSprite(displayWidth-435,displayHeight-310,5,80);
B22 = createSprite(displayWidth-740,displayHeight-350,5,125);
B23 = createSprite(displayWidth-840,displayHeight-320,5,80);
B24 = createSprite(displayWidth-1135,displayHeight-320,5,80);
B25 = createSprite(displayWidth-1100,displayHeight-410,175,5);
B26 = createSprite(displayWidth-1020,displayHeight-650,375,5);
B27 = createSprite(displayWidth-925,displayHeight-600,375,5);
B28 = createSprite(displayWidth-1135,displayHeight-575,5,35);
B29 = createSprite(displayWidth-875,displayHeight-460,515,5);
B30 = createSprite(displayWidth-950,displayHeight-555,200,5);

B31 = createSprite(displayWidth-1035,displayHeight-265,5,90);
B32 = createSprite(displayWidth-975,displayHeight-265,100,5);
B33 = createSprite(displayWidth-835,displayHeight-535,5,40);
B34 = createSprite(displayWidth-775,displayHeight-275,100,5);
B35 = createSprite(displayWidth-535,displayHeight-275,5,75);
B36 = createSprite(displayWidth-585,displayHeight-650,100,5);
B37 = createSprite(displayWidth-310,displayHeight-650,100,5);
B38 = createSprite(displayWidth-385,displayHeight-610,115,5);
B39 = createSprite(displayWidth-340,displayHeight-630,5,40);
B40 = createSprite(displayWidth-435,displayHeight-450,5,75);

B41 = createSprite(displayWidth-435,displayHeight-625,5,35);
B42 = createSprite(displayWidth-225,displayHeight-650,50,5);

B1.visible=false;
B2.visible=false;
B3.visible=false;
B4.visible=false;
B5.visible=false;
B6.visible=false;
B7.visible=false;
B8.visible=false;
B9.visible=false;
B10.visible=false;

B11.visible=false;
B12.visible=false;
B13.visible=false;
B14.visible=false;
B15.visible=false;
B16.visible=false;
B17.visible=false;
B18.visible=false;
B19.visible=false;
B20.visible=false;

B21.visible=false;
B22.visible=false;
B23.visible=false;
B24.visible=false;
B25.visible=false;
B26.visible=false;
B27.visible=false;
B28.visible=false;
B29.visible=false;
B30.visible=false;

B31.visible=false;
B32.visible=false;
B33.visible=false;
B34.visible=false;
B35.visible=false;
B36.visible=false;
B37.visible=false;
B38.visible=false;
B39.visible=false;
B40.visible=false;

B41.visible=false;
B42.visible=false;

uparrow = createSprite(700,500,10,10);
uparrow.addImage("Up",up);
uparrow.scale = 0.25;

rightarrow = createSprite(800,500,10,10);
rightarrow.addImage("Right",right);
rightarrow.scale = 0.25;

leftarrow = createSprite(900,500,10,10);
leftarrow.addImage("Left",left);
leftarrow.scale = 0.25;

downarrow = createSprite(1000,500,10,10);
downarrow.addImage("Down",down);
downarrow.scale = 0.25;

carrot1=createSprite(displayWidth-1185,displayHeight-285);
carrot1.addImage("Carrot1",carrot_img);

carrot2=createSprite(displayWidth-1185,displayHeight-345);
carrot2.addImage("Carrot2",carrot_img);

carrot3=createSprite(displayWidth-1185,displayHeight-455);
carrot3.addImage("Carrot3",carrot_img);

carrot4=createSprite(displayWidth-1185,displayHeight-600);
carrot4.addImage("Carrot4",carrot_img);

carrot5=createSprite(displayWidth-1185,displayHeight-550);
carrot5.addImage("Carrot5",carrot_img);

carrot6=createSprite(displayWidth-1085,displayHeight-285);
carrot6.addImage("Carrot6",carrot_img);

carrot7=createSprite(displayWidth-1025,displayHeight-345);
carrot7.addImage("Carrot7",carrot_img);

carrot8=createSprite(displayWidth-885,displayHeight-350);
carrot8.addImage("Carrot8",carrot_img);

carrot9=createSprite(displayWidth-885,displayHeight-410);
carrot9.addImage("Carrot9",carrot_img);

carrot10=createSprite(displayWidth-490,displayHeight-323);
carrot10.addImage("Carrot10",carrot_img);

carrot11=createSprite(displayWidth-586,displayHeight-285);
carrot11.addImage("Carrot11",carrot_img);

carrot12=createSprite(displayWidth-330,displayHeight-250);
carrot12.addImage("Carrot12",carrot_img);

carrot13=createSprite(displayWidth-430,displayHeight-250);
carrot13.addImage("Carrot13",carrot_img);

carrot14=createSprite(displayWidth-287,displayHeight-285);
carrot14.addImage("Carrot14",carrot_img);

carrot15=createSprite(displayWidth-775,displayHeight-255);
carrot15.addImage("Carrot15",carrot_img);

carrot16=createSprite(displayWidth-685,displayHeight-255);
carrot16.addImage("Carrot16",carrot_img);

carrot17=createSprite(displayWidth-850,displayHeight-255);
carrot17.addImage("Carrot17",carrot_img);

carrot18=createSprite(displayWidth-950,displayHeight-255);
carrot18.addImage("Carrot18",carrot_img);

carrot19=createSprite(displayWidth-920,displayHeight-300);
carrot19.addImage("Carrot19",carrot_img);

carrot20=createSprite(displayWidth-685,displayHeight-570);
carrot20.addImage("Carrot20",carrot_img);

carrot21=createSprite(displayWidth-785,displayHeight-355);
carrot21.addImage("Carrot21",carrot_img);

carrot22=createSprite(displayWidth-600,displayHeight-675);
carrot22.addImage("Carrot22",carrot_img);

carrot23=createSprite(displayWidth-450,displayHeight-580);
carrot23.addImage("Carrot23",carrot_img);

carrot24=createSprite(displayWidth-565,displayHeight-390);
carrot24.addImage("Carrot24",carrot_img);

carrot25=createSprite(displayWidth-985,displayHeight-635);
carrot25.addImage("Carrot25",carrot_img);

carrot26=createSprite(displayWidth-290,displayHeight-595);
carrot26.addImage("Carrot26",carrot_img);

carrot27=createSprite(displayWidth-275,displayHeight-680);
carrot27.addImage("Carrot27",carrot_img);

carrot28=createSprite(displayWidth-487,displayHeight-650);
carrot28.addImage("Carrot28",carrot_img);

carrot29=createSprite(displayWidth-485,displayHeight-500);
carrot29.addImage("Carrot29",carrot_img);

carrot30=createSprite(displayWidth-590,displayHeight-570);
carrot30.addImage("Carrot30",carrot_img);

carrot31=createSprite(displayWidth-1085,displayHeight-550);
carrot31.addImage("Carrot31",carrot_img);

carrot32=createSprite(displayWidth-785,displayHeight-550);
carrot32.addImage("Carrot32",carrot_img);

carrot33=createSprite(displayWidth-900,displayHeight-480);
carrot33.addImage("Carrot33",carrot_img);

carrot34=createSprite(displayWidth-790,displayHeight-645);
carrot34.addImage("Carrot34",carrot_img);

carrot35=createSprite(displayWidth-750,displayHeight-450);
carrot35.addImage("Carrot35",carrot_img);

carrot36=createSprite(displayWidth-1100,displayHeight-675);
carrot36.addImage("Carrot36",carrot_img);

carrot37=createSprite(displayWidth-900,displayHeight-675);
carrot37.addImage("Carrot37",carrot_img);

carrot38=createSprite(displayWidth-350,displayHeight-440);
carrot38.addImage("Carrot38",carrot_img);

carrot39=createSprite(displayWidth-450,displayHeight-385);
carrot39.addImage("Carrot39",carrot_img);

carrot40=createSprite(displayWidth-387,displayHeight-350);
carrot40.addImage("Carrot40",carrot_img);

carrot1.scale = 0.08;
carrot2.scale = 0.08;
carrot3.scale = 0.08;
carrot4.scale = 0.08;
carrot5.scale = 0.08;
carrot6.scale = 0.08;
carrot7.scale = 0.08;
carrot8.scale = 0.08;
carrot9.scale = 0.08;
carrot10.scale = 0.08;

carrot11.scale = 0.08;
carrot12.scale = 0.08;
carrot13.scale = 0.08;
carrot14.scale = 0.08;
carrot15.scale = 0.08;
carrot16.scale = 0.08;
carrot17.scale = 0.08;
carrot18.scale = 0.08;
carrot19.scale = 0.08;
carrot20.scale = 0.08;

carrot21.scale = 0.08;
carrot22.scale = 0.08;
carrot23.scale = 0.08;
carrot24.scale = 0.08;
carrot25.scale = 0.08;
carrot26.scale = 0.08;
carrot27.scale = 0.08;
carrot28.scale = 0.08;
carrot29.scale = 0.08;
carrot30.scale = 0.08;

carrot31.scale = 0.08;
carrot32.scale = 0.08;
carrot33.scale = 0.08;
carrot34.scale = 0.08;
carrot35.scale = 0.08;
carrot36.scale = 0.08;
carrot37.scale = 0.08;
carrot38.scale = 0.08;
carrot39.scale = 0.08;
carrot40.scale = 0.08;

player.scale = 0.25;

}

function draw(){
background(maze)

if(player.isTouching(carrot1)){
carrot1.destroy();
score=score+5;
}

if(player.isTouching(carrot2)){
carrot2.destroy();
score=score+5;
}

if(player.isTouching(carrot3)){
carrot3.destroy();
score=score+5;
}

if(player.isTouching(carrot4)){
carrot4.destroy();
score=score+5;
}

if(player.isTouching(carrot5)){
carrot5.destroy();
score=score+5;
}   

if(player.isTouching(carrot6)){
carrot6.destroy();
score=score+5;
}

if(player.isTouching(carrot7)){
carrot7.destroy();
score=score+5;
}

if(player.isTouching(carrot8)){
carrot8.destroy();
score=score+5;
}

if(player.isTouching(carrot9)){
carrot9.destroy();
score=score+5;
}

if(player.isTouching(carrot10)){
carrot10.destroy();
score=score+5;
}

if(player.isTouching(carrot11)){
carrot11.destroy();
score=score+5;
}

if(player.isTouching(carrot12)){
carrot12.destroy();
score=score+5;
}

if(player.isTouching(carrot13)){
carrot13.destroy();
score=score+5;
}

if(player.isTouching(carrot14)){
carrot14.destroy();
}

if(player.isTouching(carrot15)){
carrot15.destroy();
score=score+5;
}

if(player.isTouching(carrot16)){
carrot16.destroy();
score=score+5;
}

if(player.isTouching(carrot17)){
carrot17.destroy();
score=score+5;
}

if(player.isTouching(carrot18)){
carrot18.destroy();
score=score+5;
}

if(player.isTouching(carrot19)){
carrot19.destroy();
score=score+5;
}

if(player.isTouching(carrot20)){
carrot20.destroy();
score=score+5;
}

if(player.isTouching(carrot21)){
carrot21.destroy();
score=score+5;
}
    
if(player.isTouching(carrot22)){
carrot22.destroy();
score=score+5;
}
    
if(player.isTouching(carrot23)){
carrot23.destroy();
score=score+5;
}
    
if(player.isTouching(carrot24)){
carrot24.destroy();
score=score+5;
}
    
if(player.isTouching(carrot25)){
carrot25.destroy();
score=score+5;
}   
    
if(player.isTouching(carrot26)){
carrot26.destroy();
score=score+5;
}
    
if(player.isTouching(carrot27)){
carrot27.destroy();
score=score+5;
}
    
if(player.isTouching(carrot28)){
carrot28.destroy();
score=score+5;
}
    
if(player.isTouching(carrot29)){
carrot29.destroy();
score=score+5;
}
    
if(player.isTouching(carrot30)){
carrot30.destroy();
score=score+5;
}
    
if(player.isTouching(carrot31)){
carrot31.destroy();
score=score+5;
}
    
if(player.isTouching(carrot32)){
carrot32.destroy();
score=score+5;
}
    
if(player.isTouching(carrot33)){
carrot33.destroy();
score=score+5;
}
    
if(player.isTouching(carrot34)){
carrot34.destroy();
score=score+5;
}
    
if(player.isTouching(carrot35)){
carrot35.destroy();
score=score+5;
}
    
if(player.isTouching(carrot36)){
carrot36.destroy();
score=score+5;
}
    
if(player.isTouching(carrot37)){
carrot37.destroy();
score=score+5;
}
    
if(player.isTouching(carrot38)){
carrot38.destroy();
score=score+5;
}
    
if(player.isTouching(carrot39)){
carrot39.destroy();
score=score+5;
}
    
if(player.isTouching(carrot40)){
carrot40.destroy();
score=score+5;
}           

for(var  i =carrotA.length-1;i<=0;i--){
    fill("black");
    console.log(i)
    textSize(40);
    text("You Win!",displayWidth-500,displayHeight-500)
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
edges=createEdgeSprites();

player.bounceOff(edges[0]);
player.bounceOff(edges[1]);
player.bounceOff(edges[2]);
player.bounceOff(edges[3]);

player.bounceOff(B1);
player.bounceOff(B2);
player.bounceOff(B3);
player.bounceOff(B4);
player.bounceOff(B5);
player.bounceOff(B6);
player.bounceOff(B7);
player.bounceOff(B8);
player.bounceOff(B9);
player.bounceOff(B10);

player.bounceOff(B11);
player.bounceOff(B12);
player.bounceOff(B13);
player.bounceOff(B14);
player.bounceOff(B15);
player.bounceOff(B16);
player.bounceOff(B17);
player.bounceOff(B18);
player.bounceOff(B19);
player.bounceOff(B20);

player.bounceOff(B21);
player.bounceOff(B22);
player.bounceOff(B23);
player.bounceOff(B24);
player.bounceOff(B25);
player.bounceOff(B26);
player.bounceOff(B27);
player.bounceOff(B28);
player.bounceOff(B29);
player.bounceOff(B30);

player.bounceOff(B31);
player.bounceOff(B32);
player.bounceOff(B33);
player.bounceOff(B34);
player.bounceOff(B35);
player.bounceOff(B36);
player.bounceOff(B37);
player.bounceOff(B38);
player.bounceOff(B39);
player.bounceOff(B40);

player.bounceOff(B41);
player.bounceOff(B42);

player.depth = player.depth+1

carrot1.depth = player.depth;
carrot2.depth = player.depth;
carrot3.depth = player.depth;
carrot4.depth = player.depth;
carrot5.depth = player.depth;
carrot6.depth = player.depth;
carrot7.depth = player.depth;
carrot8.depth = player.depth;
carrot9.depth = player.depth;
carrot10.depth = player.depth;

carrot11.depth = player.depth;
carrot12.depth = player.depth;
carrot13.depth = player.depth;
carrot14.depth = player.depth;
carrot15.depth = player.depth;
carrot16.depth = player.depth;
carrot17.depth = player.depth;
carrot18.depth = player.depth;
carrot19.depth = player.depth;
carrot20.depth = player.depth;

carrot21.depth = player.depth;
carrot22.depth = player.depth;
carrot23.depth = player.depth;
carrot24.depth = player.depth;
carrot25.depth = player.depth;
carrot26.depth = player.depth;
carrot27.depth = player.depth;
carrot28.depth = player.depth;
carrot29.depth = player.depth;
carrot30.depth = player.depth;

carrot31.depth = player.depth;
carrot32.depth = player.depth;
carrot33.depth = player.depth;
carrot34.depth = player.depth;
carrot35.depth = player.depth;
carrot36.depth = player.depth;
carrot37.depth = player.depth;
carrot38.depth = player.depth;
carrot39.depth = player.depth;
carrot40.depth = player.depth;

if(keyDown(UP_ARROW)){
player.velocityY = -3;
}

if(keyDown(DOWN_ARROW)){
player.velocityY = 3;
}

if(keyDown(RIGHT_ARROW)){
player.velocityX = 3;
}

if(keyDown(LEFT_ARROW)){
player.velocityX = -3;
}

if(touches.length>0|| mousePressedOver(uparrow)){
touches=[];
player.velocityY = -3;
player.x=0;
}

if(touches.length>0|| mousePressedOver(downarrow)){
touches=[];
player.velocityY = 3;
player.x=0;
}

if(touches.length>0|| mousePressedOver(rightarrow)){
touches=[];
player.velocityX = 3;
player.y=0;
}

if(touches.length>0|| mousePressedOver(leftarrow)){
touches=[];
player.velocityX = -3;
player.y=0;
}

drawSprites();

fill("black");
textSize(20);
text("Score: "+score,displayWidth-1250,displayHeight-700)
}

