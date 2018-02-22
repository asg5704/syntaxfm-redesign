const gulp = require('gulp'),
			del = require('del'),
			pump = require('pump'),
			usemin = require('gulp-usemin'),
			rev = require('gulp-rev'),
      browserSync = require('browser-sync').create();

gulp.task('deleteFolder', function() {
  return del('./docs');
});

gulp.task('previewDist', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: 'docs'
		}
	})
});

gulp.task('copyGenFiles', ['deleteFolder'], function() {
	var paths = [
	  './app/**/*',
	  './app/index.html',
	  './app/assets/styles/**',,
	  './app/temp',
	  './app/temp/**'
	];
	return gulp.src(paths)
	  .pipe(gulp.dest('./docs'))
})

gulp.task('useMinTrigger', ['deleteFolder'], function() {
  gulp.start('usemin')
});

gulp.task('usemin', ['styles'], function() {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [rev()]
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteFolder', 'copyGenFiles', 'useMinTrigger']);