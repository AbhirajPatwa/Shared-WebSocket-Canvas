var socket;
let colour = 'black';
let a,b,c,d,e;
let slider;
function setup() {
  var canvas = createCanvas(800, 475);
  canvas.parent("canvas");
  size = 40;
  socket = io({ transports : ['websocket'] });
  socket.on('mouse',(data) => {
    fill(data.c);
    ellipse(data.x, data.y, data.s, data.s);
  })
  a= createButton('red');
  b= createButton('green');
  c= createButton('blue');
  d= createButton('yellow');
  e= createButton('white');
  a.mousePressed(function() {myFunction('red')});
  b.mousePressed(function() {myFunction('green')});
  c.mousePressed(function() {myFunction('blue')});
  d.mousePressed(function() {myFunction('yellow')});
  e.mousePressed(function() {myFunction('white')});
  slider = createSlider(10, 100, 40);
}

function mouseDragged() {
  size = slider.value();
  print([mouseX, mouseY, colour, size]);
  var data= {
    x: int(mouseX),
    y: mouseY,
    c: colour,
    s: size
  }
  socket.emit('mouse', data);
}

function myFunction(c) {
  colour = c;
}

function mkSize (s) {size = s;}

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