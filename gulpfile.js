// node runtime
const exec = require('child_process').exec;

// gulp + plugins
const gulp = require('gulp');
const beautify = require("gulp-beautify");
const eslint = require("gulp-eslint");
const eslintIfFixed = require("gulp-eslint-if-fixed");
const argv = require("yargs").argv;

/**
 * 
 * @param {*} cmd shell dommand
 * @param {*} done gulp callback
 */
function shellWithLog(cmd,done){
    let command = exec(cmd, (err)=>{if(err)  {throw err }else{ done()}});
    command.stdout.on('data', console.log);
    command.stderr.on('data', console.error);
    return command
}

/**
 * @param {*} target git url => git.heroku.com/bexboardmean.git
 * @returns stream (for gulp as done function)
 */
function deploy(target, done){
    return shellWithLog('git push https://tmp:'+ argv.herokuAPIKey +'@'+ target +'  HEAD:master --force', done);
    /*return shellWithLog('git remote add heroku https://tmp:'+ argv.herokuAPIKey +'@'+ target, 
        ()=> shellWithLog("git push heroku HEAD:master --force", 
            ()=> shellWithLog("git remote remove heroku", done)));*/
}

gulp.task('build', function(done){
    return shellWithLog('ng build', done)
});

//
//  TEST tasks
//

gulp.task("beautify:backend" ,function () {
    return gulp.src( "server/**/*.js")
        .pipe(beautify({ jslintHappy: true, "end_with_newline": true }))
        .pipe(gulp.dest("server"));
});
   
gulp.task("lint:backend", function () {
    return gulp.src("server/**/*.{mjs,js}")
        .pipe(eslint({ fix: true }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(eslintIfFixed("server"));
});

gulp.task('test:backend', gulp.series("lint:backend","beautify:backend" ));

gulp.task('test:frontend',function(done){
    return shellWithLog('ng lint my-app --fix', done)
}, function(done){
    return shellWithLog('ng test --watch=false', done)
})


//
//  DEV tasks
//
gulp.task('dev:backend',function(done){
    return shellWithLog('nodemon server/index.js --watch server', done)
});

gulp.task('dev:frontend',function(done){
    return shellWithLog('ng serve --open  --no-progress --live-reload', done)
});

gulp.task('deploy:pro', function(done){
    return deploy("git.heroku.com/bexboardprod.git", done)
});
gulp.task('deploy:dev', function(done){
    return deploy("git.heroku.com/bexioboarddev.git", done)
});


gulp.task('defaultDev',  gulp.parallel('dev:backend','dev:frontend'));

gulp.task('defaultTest', gulp.parallel('test:backend','test:frontend'));