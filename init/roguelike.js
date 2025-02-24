var FONT = 32;
var ROWS = 10;
var COLS = 15;
var ACTORS = 10;
var map;
var asciidisplay;

var game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, null, {
  create: create,
});

function create() {
  game.input.keyboard.addCallbacks(null, null, onKeyUp);
  initMap();
  asciidisplay = [];
  for (var y = 0; y < ROWS; y++) {
    var newRow = [];
    asciidisplay.push(newRow);
    for (var x = 0; x < COLS; x++) {
      newRow.push(initCell("", x, y));
    }
  }
  drawMap();
}

function onKeyUp(event) {
  switch (event.keyCode) {
    case Phaser.Keyboard.LEFT:

    case Phaser.Keyboard.RIGHT:

    case Phaser.Keyboard.UP:

    case Phaser.Keyboard.DOWN:
  }
}

function initMap() {
  map = [];
  for (var y = 0; y < ROWS; y++) {
    var newRow = [];
    for (var x = 0; x < COLS; x++) {
      if (Math.random() > 0.8) {
        newRow.push("#");
      } else {
        newRow.push(".");
      }
    }
    map.push(newRow);
  }
}

function initCell(chr, x, y) {
  var style = { font: FONT + "px monospace", fill: "#fff" };
  return game.add.text(FONT * 0.6 * x, FONT * y, chr, style);
}

function drawMap() {
  for (var y = 0; y < ROWS; y++) {
    for (var x = 0; x < COLS; x++) {
      asciidisplay[y][x].content = map[y][x];
    }
  }
}
