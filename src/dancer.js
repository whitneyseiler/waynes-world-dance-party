// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, className) {

  this.left = left;
  this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer animated infinite"></span>');
  this.$node.addClass(className);

  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  // this.checkNeighbors(top, left);

};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var self = this;

  setTimeout(function() {
    self.step();
  }, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  $('body').addClass('with-line-up');
  this.$node.css('position', 'static');
};

makeDancer.prototype.calculateDistances = function() {
  var oDLeft = this.$node.offset().left;
  var oDTop = this.$node.offset().top;
  dancers.forEach(function(dancer) {
    var a = dancer.$node.offset().left - oDLeft;
    var b = dancer.$node.offset().top - oDTop;
    var distance = Math.sqrt((a * a) + (b * b));
    if (distance > 5 && distance < 250) {
      var $schwing = $('<div class="schwing animated flip"></div>');
      $('body').append($schwing);
      setTimeout(function() {
        $schwing.remove();
      }, 3000);
    }
  });

};
