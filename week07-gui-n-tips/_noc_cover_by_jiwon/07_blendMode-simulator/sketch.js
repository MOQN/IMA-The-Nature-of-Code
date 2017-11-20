var params = {
  add: false,
  darkest: false,
  lightest: false,
  difference: false,
  exclusion: false,
  multiply: false,
  screen: false,
  replace: false,
  overlay: false,
  hardLight: false,
  softLight: false,
  dodge: false,
  burn: false,
  drawBackground: false,
  bgColor: 0
}

var gui = new dat.gui.GUI();
gui.add(params, 'add');
gui.add(params, 'darkest');
gui.add(params, 'lightest');
gui.add(params, 'difference');
gui.add(params, 'exclusion');
gui.add(params, 'multiply');
gui.add(params, 'screen');
gui.add(params, 'replace');
gui.add(params, 'overlay');
gui.add(params, 'hardLight');
gui.add(params, 'softLight');
gui.add(params, 'dodge');
gui.add(params, 'burn');
gui.add(params, 'drawBackground');
gui.add(params, 'bgColor', 0, 255, 5);

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  if (params.drawBackground) {
    background(params.bgColor);
  } else {
    clear();
  }

  if (params.add) {
    blendMode(ADD);
  } else if (params.darkest) {
    blendMode(DARKEST);
  } else if (params.lightest) {
    blendMode(LIGHTEST);
  } else if (params.difference) {
    blendMode(DIFFERENCE);
  } else if (params.exclusion) {
    blendMode(EXCLUSION);
  } else if (params.multiply) {
    blendMode(MULTIPLY);
  } else if (params.screen) {
    blendMode(SCREEN);
  } else if (params.replace) {
    blendMode(REPLACE);
  } else if (params.overlay) {
    blendMode(OVERLAY);
  } else if (params.hardLight) {
    blendMode(HARD_LIGHT);
  } else if (params.softLight) {
    blendMode(SOFT_LIGHT);
  } else if (params.dodge) {
    blendMode(DODGE);
  } else if (params.burn) {
    blendMode(BURN);
  } else {
    blendMode(BLEND);
  }

  fill(255, 50, 50);
  ellipse(width * 2 / 5, height / 2, 200, 200);
  fill(80, 150, 255);
  ellipse(width * 3 / 5, height / 2, 200, 200);

}