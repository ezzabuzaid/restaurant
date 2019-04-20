const gulp = require('gulp');
const { configuration } = require('./gulp.config');


module.exports = () => gulp.task('watch', () => {
    gulp.watch(configuration.paths.src.html, gulp.series('html'));
    // gulp.watch(configuration.paths.src.scss, ['scss']);
});
