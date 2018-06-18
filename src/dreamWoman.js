var makeDreamWoman = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps, 'is-dreamWoman animated pulse infinite');
  
  this.isSelected = true;
};

makeDreamWoman.prototype = Object.create(makeDancer.prototype);
makeDreamWoman.prototype.constructor = makeDreamWoman;

// makeDreamWoman.prototype.step = function() {
//   this.$node.addClass('swing');
//   makeDancer.prototype.step.call(this);
// };