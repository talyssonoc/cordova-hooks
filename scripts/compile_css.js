module.exports = function(context) {

  console.log('=== Compiling CSS ===');

  var fs = context.requireCordovaModule('fs');
  var path = context.requireCordovaModule('path');

  var deferral = context.requireCordovaModule('q').defer();

  var sass = require('node-sass');

  var inputFile = path.join(context.opts.projectRoot, 'src/stylesheets/index.scss');
  var outputFile = path.join(context.opts.projectRoot, 'www/css/index.css');

  sass.render({
    file: inputFile
  }, function(err, result) {
    if(err) {
      console.log(err);
    }

    fs.writeFile(outputFile, result.css.toString(), function(err) {
      if(err) {
        console.log(err);
      }

      deferral.resolve();
    });
  });

  return deferral.promise;
};
