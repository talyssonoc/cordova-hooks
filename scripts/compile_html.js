module.exports = function(context) {

  console.log('=== Compiling HTML ===');

  var fs = context.requireCordovaModule('fs');
  var path = context.requireCordovaModule('path');

  var deferral = context.requireCordovaModule('q').defer();

  var ejs = require('ejs');

  var inputFile = path.join(context.opts.projectRoot, 'src/index.html');
  var outputFile = path.join(context.opts.projectRoot, 'www/index.html');

  fs.readFile(inputFile, function(err, content) {
    if(err) {
      console.log(err);
    }

    var output = ejs.render(content.toString(), {}, {
      filename: inputFile
    });

    fs.writeFile(outputFile, output, function(err) {
      if(err) {
        console.log(err);
      }

      deferral.resolve();
    });
  });

  return deferral.promise;
};
