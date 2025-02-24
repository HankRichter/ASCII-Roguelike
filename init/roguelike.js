var FONT = 32;
var ROWS = 10;
var COLS = 15;
var ACTORS = 10;
var map;
var asciidisplay;
var player;
var actorList;
var livingEnemies;

var actorMap;

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
  initActors();
  drawActors();
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

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function initActors() {
  actorList = [];
  actorMap = [];

  for (var e = 0; e < ACTORS; e++) {
    var actor = { x: 0, y: 0, hp: e == 0 ? 3 : 1 };
    do {
      actor.y = randomInt(ROWS);
      actor.x = randomInt(COLS);
    } while (
      map[actor.y][actor.x] == "#" ||
      actorMap[actor.y + "_" + actor.x] != null
    );
    actorMap[actor.y + "_" + actor.x] = actor;
    actorList.push(actor);
  }
  player = actorList[0];
  livingEnemies = ACTORS - 1;
}

function drawActors() {
  for (var a in actorList) {
    if (actorList[a].hp > 0) {
      asciidisplay[actorList[a].y][actorList[a].x].content =
        a == 0 ? "" + player.hp : "e";
    }
  }
}
