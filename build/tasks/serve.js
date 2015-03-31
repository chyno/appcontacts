
//var browserSync = require('browser-sync');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var paths = require('../paths');
var port = process.env.PORT || 9000;

gulp.task('serve',['build'], function() {
    var isDev = true;

    var nodeOptions = {
        script: paths.nodeServer,
        delayTime: 1,
        env: {
            'PORT': port,
            'NODE_ENV': isDev ? 'dev' : 'build'
        },
        watch: [paths.serverRoot]
    };

    return $.nodemon(nodeOptions)
        .on('restart', function(ev) {
            log('*** nodemon restarted');
            log('files changed on restart:\n' + ev);
        })
        .on('start', function() {
            log('*** nodemon started');
        })
        .on('crash', function() {
            log('*** nodemon crashed: script crashed for some reason');
        })
        .on('exit', function() {
            log('*** nodemon exited cleanly');
        });
});


function clean(path, done) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path, done);
}
function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}


/*
gulp.task('serve', ['build'], function(done) {
browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
}

);
*/