const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    

}

function draw(){
    // add condition to check if any background image is there to add
    if(backgroundImg)
        background(backgroundImg);
    

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;

    // write code slice the datetime
    var hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset

    fill("white");
    textSize(20);
    if(hour >= 04 && hour <= 06){
        fill("white");
        textSize(20);
        bg = "sunrise1.png";
        text("Time of day in India: Dawn", 600, 500);
    }else if(hour >= 06 && hour <= 08){
        fill("white");
        textSize(20);
        bg = "sunrise2.png";
        text("Time of day in India: Sunrise", 600, 500);
    }else if(hour >= 08 && hour <= 10){
        fill("white");
        textSize(20);
        bg = "sunrise3.png";
        text("Time of day in India: Sunrise", 600, 500);
    }else if(hour >= 10 && hour <= 12){
        fill("white");
        textSize(20);
        bg =  "sunrise4.png";
        text("Time of day in India: Morning", 600, 500);
    }else if(hour >= 12 && hour <= 14){
        fill("white");
        textSize(20);
        bg = "sunrise5.png";
        text("Time of day in India: Mid-day", 600, 500);
    }else if(hour >= 14 && hour <= 16){
        fill("white");
        textSize(20);
        bg = "sunrise6.png";
        text("Time of day in India: Noon", 600, 500);
    }else if(hour >= 16 && hour <= 18){
        fill("white");
        textSize(20);
        bg = "sunset7.png";
        text("Time of day in India: Afternoon", 600, 500);
    }else if(hour >= 18 && hour <= 20){
        fill("white");
        textSize(20);
        bg = "sunset8.png";
        text("Time of day in India: Evening", 600, 500);
    }else if(hour >= 20 && hour <= 23){
        fill("white");
        textSize(20);
        bg = "sunset9.png";
        text("Time of day in India: Dusk", 600, 500);
    }else if(hour >= 23 && hour == 0){
        fill("white");
        textSize(20);
        bg = "sunset10.png";
        text("Time of day in India: Sunset", 600, 500);
    }else if(hour == 0 && hour <= 02){
        fill("white");
        textSize(20);
        bg = "sunset11.png";
        text("Time of day in India: Night", 600, 500);
    }else if(hour >= 02 && hour <= 04){
        fill("white");
        textSize(20);
        bg = "sunset12.png";
        text("Time of day in India: Night", 600, 500);
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);

}
