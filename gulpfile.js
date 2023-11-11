// main module
import gulp from "gulp"
// import path
import { path } from "./gulp/config/path.js"
// import plugins
import { plugins } from "./gulp/config/plugins.js"

global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins,
}

// import tasks
import { reset } from "./gulp/tasks/reset.js"
import { html } from "./gulp/tasks/html.js"
import { server } from "./gulp/tasks/server.js"
import { css } from "./gulp/tasks/css.js"
import { js } from "./gulp/tasks/javascript.js"
import { images } from "./gulp/tasks/images.js"
import { svgSprive } from "./gulp/tasks/svgSprive.js"

import { fonts } from "./gulp/tasks/fonts.js"
// import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js'
// const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

// import { scss } from './gulp/tasks/scss.js'

// watcher
function watcher() {
	gulp.watch(path.watch.html, html)
	gulp.watch(path.watch.css, css)
	gulp.watch(path.watch.images, images)
	gulp.watch(path.watch.js, js)
}

const mainTasks = gulp.series(fonts, gulp.parallel(html, css, js, images, svgSprive))
// execution scripts
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))

// default task
gulp.task("default", dev)
