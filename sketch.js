let w = 500;
let h = 500;

let circles = [];

function setup () {
    createCanvas(w, h);
    color(HSB);

    let circle = new Circle();
    circle.posX = w;
    circle.posY = h;
    circles.push(circle);
}

function mousePressed() {
  for (let i = 0; i < circles.length; i++) {
    circles[i].clicked(mouseX, mouseY); 
}
}

  function draw() {
    background(255);
    noStroke();
   
    }
        
        
  
        