const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var drops=[];
var maxDrops=100;
var it= 0;
var bolt;
function preload(){
    boltImg1=loadImage('thunderbolt/1.png')
    boltImg2=loadImage('thunderbolt/2.png')
    boltImg3=loadImage('thunderbolt/3.png')
    boltImg4=loadImage('thunderbolt/4.png')
} 

function setup(){

    engine = Engine.create();
    world = engine.world;

    var canvas = createCanvas(500,500);


    
    for(var i=0;i<maxDrops;i++){
drops.push(new Drop(random(0,400),random(0,400),5));

    }


    man=new Man(200,200,10,10);
   //bolt= new Bolt(0,0,10,10)
   
    
}

function draw(){

    Engine.update(engine);

    background(0);
    
    

    man.display();
    //bolt.display();

    for(var i=0;i<maxDrops;i++){
        drops[i].display();
        drops[i].update();
            }

            var rand=Math.round(random(1,4));


    if(frameCount%80===0){

        it=frameCount;
        bolt=createSprite(random(10,370),random(10,30),10,10);
switch(rand){
    case 1: bolt.addImage(boltImg1);
    break;
    case 2: bolt.addImage(boltImg2);
    break;
    case 3: bolt.addImage(boltImg3);
    break;
    case 4: bolt.addImage(boltImg4);

    break;
    default : break;
}

bolt.scale=random(0.3,0.6);
    }

    if(it+10===frameCount && bolt){
        bolt.destroy();
    }

    
drawSprites();

}  





