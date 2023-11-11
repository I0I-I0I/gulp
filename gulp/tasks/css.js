import postcss from "gulp-postcss"
import autoPrefixer from "gulp-autoprefixer"
import groupCssMediaQueries from "gulp-group-css-media-queries"
import webpcss from "gulp-webpcss"
import cleanCss from "gulp-clean-css"
import rename from "gulp-rename"
import postcssImport from "postcss-import"
import minmax from "postcss-media-minmax"
import cssNesting from "postcss-nesting"

export const css = () => {
	const plugins = [postcssImport({ root: app.path.src.css }), minmax(), cssNesting()]
	return (
		app.gulp
			.src(app.path.src.css, { sourcemaps: true })
			.pipe(
				app.plugins.plumber(
					app.plugins.notify.onError({
						title: "scss",
						message: "Error: <%= error.message %>",
					}),
				),
			)
			.pipe(postcss(plugins))
			.pipe(app.plugins.replace(/@images\//g, "../images/"))

			.pipe(groupCssMediaQueries())
			.pipe(
				webpcss({
					webpClass: ".webp",
					noWebpClass: ".no-webp",
				}).pipe(
					autoPrefixer({
						grid: true,
						overrideBrowserslist: ["last 3 versions"],
						cascade: true,
					}),
				),
			)
			// not min
			.pipe(app.gulp.dest(app.path.build.css))
			.pipe(cleanCss())
			.pipe(
				rename({
					extname: ".min.css",
				}),
			)
			.pipe(app.gulp.dest(app.path.build.css))
			.pipe(app.plugins.browsersync.stream())
	)
}
