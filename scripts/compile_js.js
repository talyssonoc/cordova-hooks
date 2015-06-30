module.exports = function(context) {

  console.log('=== Compiling JS ===');

  var fs = context.requireCordovaModule('fs');
  var path = context.requireCordovaModule('path');

  var deferral = context.requireCordovaModule('q').defer();

  var browserify = require('browserify')();

  var inputFile = path.join(context.opts.projectRoot, 'src/javascripts/index.js');

  var outputFile = path.join(context.opts.projectRoot, 'www/js/index.js');
  outputFile = fs.createWriteStream(outputFile);

  browserify.add(inputFile);

  browserify.bundle().pipe(outputFile);
};
