var makeWayneDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps, 'is-wayne');
};

makeWayneDancer.prototype = Object.create(makeDancer.prototype);
makeWayneDancer.prototype.constructor = makeWayneDancer;

makeWayneDancer.prototype.step = function() {
  this.$node.addClass('swing');
  makeDancer.prototype.step.call(this);
};