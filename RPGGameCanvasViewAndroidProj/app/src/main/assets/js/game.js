
var game = new Phaser.Game(
    window.innerWidth,
    window.innerHeight, Phaser.CANVAS,
    'RPG_Game',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    });

var character;
var cursors;

function preload() {
    game.load.spritesheet('character', 'char.png', 32, 32, 15);
    game.load.image('pasto','pasto.png');
}

function create() {


    game.context.setTransform(0.5,0,0,0.35,  0, 0);
    game.context.rotate(-45*Math.PI/180);

    game.context.save();

    character = game.add.sprite(0, 0, 'character');

    game.add.tileSprite(0, 0, 1920, 1920, 'pasto');

    game.world.setBounds(0, 0, 1920, 1920);

    game.physics.startSystem(Phaser.Physics.P2JS);

     game.physics.p2.enable(character);

    character = game.add.sprite(game.world.centerX, game.world.centerY, 'character');

    //  Here we add a new animation called 'walk'
    //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
    //character.animations.add('walk');

    //  And this starts the animation playing by using its key ("walk")
    //  30 is the frame rate (30fps)
    //  true means it will loop when it finishes
    game.physics.enable(character, Phaser.Physics.ARCADE);

    game.camera.follow(character);
    game.camera.deadzone = new Phaser.Rectangle(window.innerWidth / 10, window.innerHeight / 10, (window.innerWidth / 10) * 9, (window.innerHeight / 10) * 9);
}

function update() {

  game.physics.arcade.moveToPointer(character, 60, game.input.activePointer, 500);
}

function render() {
    game.debug.cameraInfo(game.camera, 32, 32);
    game.debug.spriteCoords(character, 32, 500);
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