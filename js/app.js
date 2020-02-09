// Initialize some Variables
// Min/Max Enemy Speed
let min = 60;
let max = 150;

// Enemies our player must avoid
var Enemy = function(x, y, s) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // Variables for enemy position and speed
    this.x = x;
    this.y = y;
    this.speed = s;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // Updates enemies horizontal movement speed
    this.x += this.speed * dt;

    // If enemy moves off the canvas, reset and randomize speed
    if (this.x > 606) {
      this.x = -100;
      let enSpeed = Math.floor(Math.random() * (max - min)) + min;
      this.speed = enSpeed;
    }


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

let Player = function(x, y) {

  // The image sprite for our player.
  // This uses the same helper as Enemy
  this.sprite = 'images/char-boy.png';

  // Variables for player position
  this.x = x;
  this.y = y;

}

Player.prototype.update = function(dt) {

}

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// Handle player input during game
Player.prototype.handleInput = function (keyPress) {
  console.log(keyPress);

  if (keyPress == 'left'){
    this.x += (-101);
  } else if (keyPress == 'right') {
    this.x += 101;
  } else if (keyPress == 'up') {
    this.y += (-84);
  } else if (keyPress == 'down') {
    this.y += 84;
  }

};


// Now instantiate your objects.
const enemy1 = new Enemy(-100, 60, 250);
const enemy2 = new Enemy(-100, 142, 250);
const enemy3 = new Enemy(-100, 228, 250);

const character = new Player(202, 404);

// Place all enemy objects in an array called allEnemies
const allEnemies = [enemy1, enemy2, enemy3];

// Place the player object in a variable called player
let player = character;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
