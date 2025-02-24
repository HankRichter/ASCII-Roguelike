var FONT = 32;

var ROWS = 10;
var COLS = 15;

var ACTORS = 10;
var map;

var game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, null, {
  create: create,
});

function create() {
  game.input.keyboard.addCallbacks(null, null, onKeyUp);
  initMap();
}

function onKeyUp(event) {
  switch (event.keyCode) {
    case Keyboard.LEFT:
    case Keyboard.RIGHT:
    case Keyboard.UP:
    case Keyboard.DOWN:
  }
}

function initMap() {
  map = [];
  for (var y = 0; y < ROWS; y++) {
    var newRow = [];
    for (var x = 0; x < COLS; x++) {
      if (Math.random() > 0.8) newRow.push("#");
      else newRow.push(".");
    }
    map.push(newRow);
  }
}
