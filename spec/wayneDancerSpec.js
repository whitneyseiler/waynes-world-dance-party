describe('wayneDancer', function() {

  var WayneDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    WayneDancer = new makeWayneDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(WayneDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that adds a css animation class of jello', function() {
    WayneDancer.step();
    expect(WayneDancer.$node.hasClass('swing')).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(WayneDancer, 'step');
      expect(WayneDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(WayneDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(WayneDancer.step.callCount).to.be.equal(2);
    });
  });
});
