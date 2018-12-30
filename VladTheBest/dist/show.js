"use strict";

var UPPER_LIMIT_Y = 20;
var UPPER_LIMIT_X = 2;
var LOWER_LIMIT_X = -2;
var MAX_SIZE = 6;
var MIN_SIZE = 2;
var AMOUNT = 250;
var COLOR = 0xffffff;
var _PIXI = PIXI,
    Application = _PIXI.Application,
    Graphics = _PIXI.Graphics;

var floored = function floored(v) {
  return Math.floor(Math.random() * v);
};
var update = function update(p) {
  return Math.random() > 0.5 ? Math.max(LOWER_LIMIT_X, p - 1) : Math.min(p + 1, UPPER_LIMIT_X);
};

var reset = function reset(p) {
  p.x = floored(app.renderer.width);
  p.y = -(p.height + floored(app.renderer.height));
  p.vy = floored(UPPER_LIMIT_Y);
};

var genParticles = function genParticles(t) {
  return new Array(AMOUNT).fill().map(function (p) {
    var SIZE = floored(MAX_SIZE) + MIN_SIZE;
    p = new PIXI.Sprite(t);
    p.scale.x = p.scale.y = SIZE / 100;
    // p.width = p.height = SIZE
    p.vx = floored(UPPER_LIMIT_X) - UPPER_LIMIT_X;
    p.vy = floored(UPPER_LIMIT_Y);
    p.alpha = Math.random();
    p.x = floored(app.renderer.width);
    p.y = -(SIZE + floored(app.renderer.height));
    drops.addChild(p);
    return p;
  });
};

var app = new Application({
  antialias: true,
  transparent: true
});

var drops = new PIXI.particles.ParticleContainer(AMOUNT, {
  scale: true,
  position: true,
  alpha: true
});
app.stage.addChild(drops);

var p = new Graphics();
p.beginFill(COLOR);
p.drawCircle(0, 0, 100);
p.endFill();
var baseTexture = app.renderer.generateTexture(p);
var particles = genParticles(baseTexture);

// app.stage.filters = [new PIXI.filters.BlurFilter(3)]
app.ticker.add(function (i) {
  if (app.renderer.height !== innerHeight || app.renderer.width !== innerWidth) {
    app.renderer.resize(innerWidth, innerHeight);
    drops.removeChildren();
    particles = genParticles(baseTexture);
  }
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = particles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var particle = _step.value;

      if (particle.y > 0) particle.x += particle.vx;
      particle.y += particle.vy;

      if (Math.random() > 0.9) particle.vx = update(particle.vx);
      if (Math.random() > 0.9) particle.vy = Math.min(particle.vy + 1, UPPER_LIMIT_Y);

      if (particle.x > app.renderer.width || particle.x < 0 || particle.y > app.renderer.height) reset(particle);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});

document.body.appendChild(app.view);