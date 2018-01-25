const gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      cssvars = require('postcss-simple-vars'),
      nested = require('postcss-nested'),
      cssimport = require('postcss-import'),
      mixins = require('postcss-mixins');

gulp.task('styles', function() {
  //Implement PostCSS
  //Gulp.src - where to get from Async
  return gulp.src('./app/assets/css/styles.css')
      .pipe(postcss([cssimport, mixins, cssvars, nested]))
        .on('error', function(e) {
					console.log(err.toString());
					this.emit('end');
        })
				.pipe(gulp.dest('./app/temp/styles'));

});