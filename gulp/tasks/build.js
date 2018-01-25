const gulp = require('gulp'),
      browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: 'docs'
		}
	})
})

gulp.task('build');