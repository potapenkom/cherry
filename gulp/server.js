var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./build/index.html"
        },

        
        files: ['build/**/*.html','build/*.css','build/*.js','build/img/*.*']
    });
});
