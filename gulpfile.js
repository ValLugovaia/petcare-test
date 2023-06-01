const { src, dest, parallel, series, watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const gcssmq = require('gulp-group-css-media-queries');
const browserSync = require('browser-sync').create();

function browsersync() {
    browserSync.init({
      server: {
        baseDir: './public/',
        serveStaticOptions: {
          extensions: ['html'],
        },
      },
      port: 8080,
      ui: { port: 8081 },
      open: true,
    })
}

function styles() {
    return src('./app/css/index.css')
    .pipe(autoprefixer({ grid: true }))
    .pipe(gcssmq())
    .pipe(dest('./public/css/'))
    .pipe(browserSync.stream())
}

function scripts() {
    return src('./app/js/index.js')
    .pipe(dest('./public/js/'))
    .pipe(browserSync.stream())
}

function pages() {
    return src('./app/index.html')
    .pipe(dest('./public/'))
    .pipe(browserSync.reload({ stream: true, }))
}

function copyFonts() {
    return src('./app/fonts/*')
    .pipe(dest('./public/fonts/'))
  }
  
function copyImages() {
    return src('./app/img/**/*')
    .pipe(dest('./public/img/'))
}
  
async function copyResources() {
    copyFonts()
    copyImages()
}

function watch_dev() {
    watch(['./app/js/index.js'], scripts)
    watch(['./app/css/index.css', './app/css/**/*.css', './app/css/**/**/*.css', './app/css/**/**/**/*.css'], styles).on(
      'change',
      browserSync.reload
    )
    watch(['./app/index.html'], pages).on(
      'change',
      browserSync.reload
    )
}

exports.browsersync = browsersync
exports.scripts = scripts
exports.styles = styles
exports.pages = pages
exports.copyResources = copyResources

exports.default = parallel(
  styles,
  scripts,
  copyResources,
  pages,
  browsersync,
  watch_dev
)

exports.build = series(
  styles,
  scripts,
  copyResources,
  pages
)

  
