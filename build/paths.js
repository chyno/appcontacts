var path = require('path');

var appRoot = 'src/';

module.exports = {
  root: appRoot,
  source: appRoot + 'client/**/*.js',
   sourceServer: appRoot + 'server/**/*.*',
  html: appRoot + 'client/**/*.html',
  style: 'styles/**/*.css',
  output: 'dist/client',
  outputServer: 'dist/server',
  nodeServer : 'dist/server/app.js',
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
