var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps, 'is-random');
  var characterImgs = ['images/cassandra.png', 'images/benjamin.png', 'images/stacy.png'];
  var randomImgIdx = Math.floor(Math.random() * characterImgs.length);
  var bgImgPath = characterImgs[randomImgIdx];
  this.$node.css('background', 'url('+ bgImgPath +')');
  this.$node.css('background-size', '100%');
  // this.$node.css('background-position-y', '50%');
  this.$node.css('background-repeat', 'no-repeat');
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  this.$node.addClass('tada');

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  makeDancer.prototype.step.call(this);
};
