/**
 * Module dependencies.
 */

var jade = require('jade');
var fs = require('fs');

// test cases
var bem = require('..');
var cases = fs.readdirSync('test/cases').filter(function(file) {
  return ~file.indexOf('.jade');
}).map(function(file) {
  return file.replace('.jade', '');
});

cases.forEach(function(test) {
  var name = test.replace(/[-.]/g, ' ');
  if (!fs.existsSync('test/cases/' + test + '.html')) return;
  it(name, function() {
    var html = fs.readFileSync('test/cases/' + test + '.html', 'utf8').replace(/>\s+/g, '>').replace(/\s+</g, '<');
    var settings;
    try {
      settings = JSON.parse(fs.readFileSync('test/cases/' + test + '.settings.json', 'utf8'));
    } catch(e) {
      settings = {};
    }
    var result = jade.renderFile('test/cases/' + test + '.jade', {
      bem: bem(settings),
      title: 'Jade'
    }).trim();
    result.should.equal(html);
  });
});
