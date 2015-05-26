var gulp = require('gulp');

gulp.task('dev', ['clean'], function() {
  gulp.start(['images', 'ico', 'markup', 'watch']);
});
