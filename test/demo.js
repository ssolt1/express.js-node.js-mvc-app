var chai = require('chai');
var assert = chai.assert;
var jade = require('jade');
var request = require('supertest');
var app = require('../app');

describe('First test suite', function() {
  x = 0;

  beforeEach(function() {
    x = x + 1;
  });

  afterEach(function() {
    x = 0;
  });

  it('Should pass', function() {
    assert.equal(1, x);
  });

  it('Should also pass', function() {
    assert.equal(1, x);
  });

  it('Jade test', function() {
    var template = '#container';
    var expected = '<div id="container"></div>';
    var result = jade.render(template);
    assert.equal(expected, result);
  });

  it('Supertest test', function(done) {
    request(app).get('/contacts')
    .expect(200, done);
  });

});