function preload(){


}
function setup(){
    canvas= createCanvas(600,500);
    canvas.position(150,250);
    video= createCapture(VIDEO);
    video.hide();
    
    

}

function draw(VIDEO){
    fill("#FBCB0A")
    circle(300,150,200)
    fill("#FF06B7")
    circle(400,150,200)
    fill("#4B5D67")
    circle(200,150,200)
    fill("#BDF2D5")
    circle(400,450,200)
    fill("#A760FF")
    circle(200,450,200)
    fill("#D4D925")
    circle(300,450,200)
    fill("#F47C7C")
    circle(450,270,200)
    fill("#293462")
    circle(150,270,200)
    rect(150, 150, 300, 300, 20)
     
    image(video,150,150,300,300)
    
}


  function snapshot(){
      save("img.jpg")
  }