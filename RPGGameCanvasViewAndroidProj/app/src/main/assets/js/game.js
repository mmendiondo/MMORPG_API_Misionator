
var game = new Phaser.Game(
    window.innerWidth, 
    window.innerHeight, Phaser.CANVAS, 
    'RPG_Game', 
    {
      preload: preload,
      create: create
    });

function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('pasto', 'pasto.png');
    game.load.image('character', 'char.png');
}

function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    //  and assign it to a variable
    var image = game.add.sprite(0, 0, 'pasto');

    game.physics.enable(image, Phaser.Physics.ARCADE);

    image.body.velocity.x=150;
}



/*

var img = new Image();

img.src = 'pasto.png';

var charac = new Image();
charac.src = 'char.png';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var displayCenterX = canvas.width / 3.5;
var displayCenterY = canvas.width / 2;

function resizeCanvas() {
  canvas.width = window.innerWidth*2;
  canvas.height = window.innerHeight*2;
}

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

function launchMe(){
  resizeCanvas();
  render();
}

function render() {
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.setTransform(0.5,0,0,0.35,  displayCenterX, displayCenterY);
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

  
function moveCharacter()
{
  //getPath(characPosition.x, characPosition.y,  Math.round(mousePos[0] / 32),  Math.round(mousePos[1] / 32));
}
*/