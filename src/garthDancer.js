var makeGarthDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps, 'is-garth');
};

makeGarthDancer.prototype = Object.create(makeDancer.prototype);
makeGarthDancer.prototype.constructor = makeGarthDancer;

makeGarthDancer.prototype.step = function() {
  this.$node.addClass('jello');
  makeDancer.prototype.step.call(this);
};

// makeGarthDancer.prototype.lineUp = function() {
//   this.$node.css('left', '0');
// };
