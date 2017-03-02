'use strict';

var gulp = require('gulp'),
		browserSync  = require('browser-sync');


/* -------- server -------- */
gulp.task('server', function () {  
  browserSync({
    port: 9000,
    server: {
      baseDir: 'app/'
    },
    notify: false
  });
});

/* -------- watching -------- */
gulp.task('watch', function () {
	gulp.watch([
		'app/*.html',
		'app/js/**/*.js',
		'app/css/**/*.css'
	]).on('change', browserSync.reload);
});

gulp.task('default', ['server', 'watch']);

/* -------- ERRORS  -------- */
var log = function (error) {
  console.log([
    '',
    "----------ERROR MESSAGE START----------",
    ("[" + error.name + " in " + error.plugin + "]"),
    error.message,
    "----------ERROR MESSAGE END----------",
    ''
  ].join('\n'));
  this.end();
}