var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: './src',
        notify: false,
    });

    gulp.watch("./src/*.css", function(){
        return gulp.src("./src/*.css").pipe(browserSync.stream());
    });
    gulp.watch("./src/*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('serve'));