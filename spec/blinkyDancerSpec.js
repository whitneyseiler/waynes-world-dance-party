describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that adds a css animation class of tada', function() {
    // sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.hasClass('tada')).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('party time dancer image', function() {
    it('should randomly select an image from the images array when clicked', function() {
      var selections = [];
      for (var i = 0; i < 10; i++) {
        var newDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
        selections.push(newDancer.$node.css('background'));
      }
      var uniqSelections = selections.filter((v, i, a) => a.indexOf(v) === i);
      expect(uniqSelections.length).to.be.above(1);
    });
  });
});
