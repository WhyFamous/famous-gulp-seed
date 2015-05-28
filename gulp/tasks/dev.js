var gulp = require('gulp');
var runSequence = require('run-sequence'); // only until gulp 4.0

gulp.task('dev', ['clean'], function(callback) {
  return runSequence(
    ['images', 'ico', 'markup', 'watch'],
    callback
  );
});
