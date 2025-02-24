var FONT = 32;

var ROWS = 10;
var COLS = 15;

var ACTORS = 10;

var game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, null, {
  create: create,
});

function create() {
  game.input.keyboard.addCallbacks(null, null, onKeyUp);
}

function onKeyUp(event) {
  switch (event.keyCode) {
    case Keyboard.LEFT:
    case Keyboard.RIGHT:
    case Keyboard.UP:
    case Keyboard.DOWN:
  }
}
