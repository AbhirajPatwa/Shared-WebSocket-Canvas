var socket;
let colour = 'black';
function setup() {
  var canvas = createCanvas(800, 475);
  canvas.parent("canvas");
  size = 40;
  socket = io();
  socket.on('mouse',(data) => {
    fill(data.c);
    ellipse(data.x, data.y, data.s, data.s);
  })
  
}

function mouseDragged() {
  //print(mouseX +','+mouseY);
  var data= {
    x: int(mouseX),
    y: mouseY,
    c: colour,
    s: size
  }
  socket.emit('mouse', data);
}

const mkColour = (c) => colour = c;
const mkSize = (s) => size = s;

function draw() {
  noStroke();
  if (mouseIsPressed && mouseButton == 'left') {
    fill(colour);
    ellipse(int(mouseX), mouseY, size, size);
  }
  else if (mouseIsPressed && mouseButton == 'center') {
    fill(255);
    ellipse(mouseX, mouseY, size, size);
  }
}