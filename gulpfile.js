var gulp = require("gulp"),
    gutil = require("gulp-util"),
    coffee = require("gulp-coffee"),
    browserify = require("gulp-browserify"),
    concat = require("gulp-concat"),
    compass = require("gulp-compass");
    
var coffeeCources = ['components/coffee/tagline.coffee'];
var jsSources = [
    'components/scripts/rclicks.js',
    'components/scripts/pixgrid.js',
    'components/scripts/tagline.js',
    'components/scripts/template.js'
    ];

var sassSources = ['components/sass/style.scss'];

gulp.task('coffee', function(){
    gulp.src(coffeeCources)
    .pipe(coffee({bare:true})
        .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'));
});

gulp.task('js', function(){
    gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('build/development/js'));
});

gulp.task('compass', function(){
    gulp.src(sassSources)
        .pipe(compass({
            sass: 'components/sass',
            image: 'build/development/images',
            style: 'compact'
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest('build/development/css'));
});