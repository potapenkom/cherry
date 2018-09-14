var gulp = require('gulp');
var runSequence = require('run-sequence');

var config = require('../package.json').config;

gulp.task('dev', function () {
	runSequence(
		'copy',
		['sass', 'image'],
		'server',
		'copy:watch',
		'sass:watch',
		'image:watch',
	)
});

gulp.task('prod', function () {
	runSequence(
		'copy',
		['sass', 'image']
	)
});