define(function(require, exports, module) {
  var Engine, ImageSurface, Modifier, Surface, Transform, centerSpin, initialTime, logo, mainContext;
  Engine = require('famous/core/Engine');
  Surface = require('famous/core/Surface');
  Modifier = require('famous/core/Modifier');
  Transform = require('famous/core/Transform');
  ImageSurface = require('famous/surfaces/ImageSurface');
  mainContext = Engine.createContext();
  logo = new ImageSurface({
    size: [200, 200],
    content: 'http://code.famo.us/assets/famous_logo.svg',
    classes: ['double-sided']
  });
  initialTime = Date.now();
  centerSpin = new Modifier({
    origin: [0.5, .5],
    transform: function() {
      return Transform.rotateY(.002 * (Date.now() - initialTime));
    }
  });
  return mainContext.add(centerSpin).add(logo);
});
