var gulp = require('gulp'),
	uglify = require('gulp-uglifyjs'),
	concat = require('gulp-concat'),
	tinypng = require('gulp-tinypng'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');


	gulp.task('sass', function () {
		gulp.src('./dist/sass/*.scss')
			.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
			.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
			.pipe(gulp.dest('./app/css'))
	});

	gulp.task('build', function () {
		gulp.src([
			'./dist/img/**/*.jpg',
			'./dist/img/**/*.png',
			'./dist/img/**/*.ico'])
				.pipe(tinypng('PprZbe-cDz8GtTc4QE_eFsehoz7pre8Y'))
				.pipe(gulp.dest('app/img/'));
	});


	gulp.task('script', function () {
		return gulp.src([
				'dist/js/*.js'])
				.pipe(concat('libs.min.js'))
				.pipe(uglify())
				.pipe(gulp.dest('app/js'));
	});


gulp.task('watch', ['script', 'sass'], function () {
	gulp.watch('dist/js/*.js', ['script']);
	gulp.watch('./dist/sass/*.scss', ['sass']);
});

gulp.task('default', ['watch']);
