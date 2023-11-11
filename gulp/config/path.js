// name project
import * as nodePath from "path"
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/styles/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/images`,
		fonts: `${buildFolder}/fonts/`,
	},
	src: {
		js: `${srcFolder}/js/app.js`,
		scss: `${srcFolder}/styles/index.scss`,
		css: `${srcFolder}/styles/index.css`,
		images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/images/**/*.svg`,
		html: `${srcFolder}/*.html`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/styles/**/*.scss`,
		css: `${srcFolder}/styles/**/*.css`,
		html: `${srcFolder}/**/*.html`,
		images: `${srcFolder}/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
}
