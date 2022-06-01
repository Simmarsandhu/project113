function preload(){


}
function setup(){
    canvas= createCanvas(600,500);
    canvas.position(100,250);
    video= createCapture(VIDEO);
    video.hide();
    

}

function draw(){
    circle(300,150,200)
    circle(400,150,200)
    circle(200,150,200)
    circle(400,450,200)
    circle(200,450,200)
    circle(300,450,200)
    circle(450,270,200)
    circle(150,270,200)
    rect(150, 150, 300, 300, 20)
    
}