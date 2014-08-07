var img = new Image();

img.src = 'pasto.png';

var charac = new Image();
charac.src = 'char.png';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var displayCenterX = 0;
var displayCenterY = canvas.height /2;


window.onload = launchMe;

var mousePos = [0, 0];
var mouseDown = false;
var rect = canvas.getBoundingClientRect();

var matrix = [];

for(var k = 0;k< 40;k++){
  matrix.push([]);
    for(var h = 0;h< 40;h++){
      matrix[k].push(0);
    }
}

setMatrix(matrix);

ctx.textBaseline = 'top';
ctx.fillStyle = "black";

function launchMe(){render();}

function render() {
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.setTransform(0.5,0,0,0.35,  displayCenterX -  mousePos[0], displayCenterY - mousePos[1]);
  ctx.rotate(-45*Math.PI/180);

  for(var i = 0;i< 40;i++){
      for(var j = 0;j< 40;j++){
        ctx.drawImage(img,i*32,j*32,32,32);
      }
  }

  ctx.drawImage(charac,0,0,25,50,0,0,32,32);
  ctx.setTransform(1,0,0,1,0,0);

  ctx.font = "80px game_font";
  ctx.fillText("Game On Canvas :b", 100, 100);

  ctx.font = "10px arial";
  ctx.fillText("(MousePosX:" + mousePos[0] + ","  + "MousePosY:" +  mousePos[1] + ")",  mousePos[0] + 50,  mousePos[1]);

}

function animate() {
  requestAnimationFrame(animate);
  if (mouseDown)
  render();

}

animate();

function getMousePos(canvas, evt) {
        mousePos[0] =  Math.round(evt.changedTouches[0].clientX)  ;
        mousePos[1] =  Math.round(evt.changedTouches[0].clientY)  ;
    }

  // canvas.addEventListener('mousedown', function (evt) {
  //     mouseDown = true;
  //     getMousePos(canvas, evt);
  // }, false);

  // canvas.addEventListener('mouseup', function (evt) {
  //     mouseDown = false;
  //     getMousePos(canvas, evt);
  // }, false);

  // canvas.addEventListener('mouseout', function (evt) {
  //     mouseDown = false;
  // }, false);

  // canvas.addEventListener('mousemove', function (evt) {
  //     getMousePos(canvas, evt);
  // }, false);

canvas.addEventListener("touchstart", function (evt) {
      evt.preventDefault();
       mouseDown = true;
      getMousePos(canvas, evt);
  }, false);
  canvas.addEventListener("touchend", function (evt) {
    evt.preventDefault();
      mouseDown = false;
      getMousePos(canvas, evt);
  }, false);
  canvas.addEventListener("touchcancel",function (evt) {
    evt.preventDefault();
      mouseDown = false;
  }, false);
  canvas.addEventListener("touchleave", function (evt) {
    evt.preventDefault();
      getMousePos(canvas, evt);
  }, false);
  canvas.addEventListener("touchmove", function (evt) {
    evt.preventDefault();
      getMousePos(canvas, evt);
  }, false);

function moveCharacter()
{
  //getPath(characPosition.x, characPosition.y,  Math.round(mousePos[0] / 32),  Math.round(mousePos[1] / 32));
}