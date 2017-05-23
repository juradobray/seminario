var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var htmlmin = require('gulp-htmlmin');
var minifyCSS = require('gulp-minify-css');
var connect = require('gulp-connect');
var historyApiFallback = require ('connect-history-api-fallback');

//Funciones Gulp

gulp.task('browserSync', function () {
	browserSync.init({
		server:{
			baseDir : 'app'
		}
	})
});

gulp.task('watch', ['browserSync'], () => {
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
	});


gulp.task('default', (callback) => {
	runSequence(['browserSync', 'watch'],
		callback)
});

//Tareas deploy

gulp.task('useref', () => {
	return gulp.src('app/**/*.html')
	.pipe(useref())
	.pipe(gulpIf('*.js', minify({mangle: false})))
	.pipe(gulpIf('*.css', minifyCSS()))
	.pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true})))	
	.pipe(gulp.dest('dist'))
});

gulp.task('images', () => {
	return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
	.pipe(cache(imagemin({
		interlaced : true
	})))
	.pipe(gulp.dest('dist/images'))
});

gulp.task('server', () =>{
	connect.server({
		root: './app',
		port: 3005,
		livereload: true,
		middleware: function (connect, opt){
			return [historyApiFallback({})];
		}
	});
});