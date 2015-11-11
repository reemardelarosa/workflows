var gulp = require("gulp"),
    gutil = require("gulp-util"),
    coffee = require("gulp-coffee"),
    browserify = require("gulp-browserify"),
    concat = require("gulp-concat"),
    compass = require("gulp-compass"),
    connect = require("gulp-connect");
    
var coffeeSources = ['components/coffee/tagline.coffee'];

var jsSources = [
    'components/scripts/rclicks.js',
    'components/scripts/pixgrid.js',
    'components/scripts/tagline.js',
    'components/scripts/template.js'
    ];

var sassSources = ['components/sass/style.scss'];

var htmlSources = ['build/development/*.html'];

var jsonSources = ['build/development/js/*.json']

gulp.task('coffee', function(){
    gulp.src(coffeeSources)
    .pipe(coffee({bare:true})
        .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'));
});

gulp.task('js', function(){
    gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('build/development/js'))
    .pipe(connect.reload());
});

gulp.task('compass', function(){
    gulp.src(sassSources)
        .pipe(compass({
            sass: 'components/sass',
            image: 'build/development/images',
            style: 'compact'
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest('build/development/css'))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(coffeeSources, ['coffee']);
    gulp.watch(jsSources, ['js']);
    gulp.watch('components/sass/style*.scss', ['compass']);
    gulp.watch(htmlSources, ['html']);
    gulp.watch(jsonSources, ['json']);
});

gulp.task('connect', function() {
    connect.server({
        root: 'build/development/',
        livereload: true
    });
});

gulp.task('html', function(){
    gulp.src(htmlSources)
    .pipe(connect.reload());
});

gulp.task('json', function(){
    gulp.src(jsonSources)
    .pipe(connect.reload());
});

gulp.task('default', ['coffee', 'js', 'compass', 'connect', 'html', 'json' , 'watch']);

