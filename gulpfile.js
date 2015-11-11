var gulp = require("gulp"),
    gutil = require("gulp-util"),
    coffee = require("gulp-coffee"),
    browserify = require("gulp-browserify"),
    concat = require("gulp-concat"),
    compass = require("gulp-compass"),
    connect = require("gulp-connect"),
    gulpif = require("gulp-if"),
    uglify = require("gulp-uglify");
    
var env,
    coffeeSources,
    jsSources,
    sassSources,
    htmlSources,
    jsonSources,
    outputDir,
    sassStyle;
    
env = process.env.NODE_ENV || 'development';

if(env === 'development'){
    outputDir = 'build/development/';
    sassStyle = 'expanded';
}else{
    outputDir = 'build/production/';
    sassStyle = 'compressed';
}

coffeeSources = ['components/coffee/tagline.coffee'];
jsSources = [
    'components/scripts/rclicks.js',
    'components/scripts/pixgrid.js',
    'components/scripts/tagline.js',
    'components/scripts/template.js'
    ];
sassSources = ['components/sass/style.scss'];
htmlSources = [outputDir + '*.html'];
jsonSources = [outputDir + '*.json'];

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
    .pipe(gulpif(env==='production', uglify()))
    .pipe(gulp.dest(outputDir + 'js'))
    .pipe(connect.reload());
});

gulp.task('compass', function(){
    gulp.src(sassSources)
        .pipe(compass({
            sass: 'components/sass',
            style: sassStyle,
            image: outputDir + 'images'
            
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest(outputDir + 'css'))
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
        root: outputDir,
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

