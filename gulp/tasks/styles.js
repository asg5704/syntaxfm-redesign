const gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      cssimport = require('postcss-easy-import'),
      precss = require('precss'),
      mixins = require('postcss-mixins');

gulp.task('styles', function() {
  //Implement PostCSS
  //Gulp.src - where to get from Async
  return gulp.src('./app/assets/css/styles.css')
      .pipe(postcss([cssimport, mixins, precss]))
        .on('error', function(e) {
					console.log(e.toString());
					this.emit('end');
        })
				.pipe(gulp.dest('./app/temp/styles'));

});