describe('Browser tests', function() {

  x = 0;

  beforeEach(function() {
    x = x + 1;
  });

  afterEach(function() {
    x = 0;
  });

  it('Should pass', function() {
    assert.equal(x, 1);
  });

  it('Should also pass', function() {
    assert.equal(x, 1);
  });

})