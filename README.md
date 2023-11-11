# Gulp

## For system:

npm i gulp-cli -g\
npm install gulp-postcss --save-dev

## For project:

npm i -D gulp del gulp-file-include gulp-replace gulp-webp-html-nosvg gulp-version-number gulp-plumber gulp-notify browser-sync gulp-rename gulp-clean-css gulp-webpcss gulp-autoprefixer gulp-group-css-media-queries postcss-import webp-converter@2.2.3 gulp-webp gulp-imagemin gulp-newer gulp-svg-sprite postcss-media-minmax postcss-nesting

### Linters:

npm install -D stylelint stylelint-config-standard postcss-lit

### For javascript:

npm i -D webpack webpack-stream

### For fonts:

npm i -D gulp-fonter gulp-ttf2woff2

### For sass:

npm i -D gulp-sass sass

## Plugin for vscode

### path autocomplete

Add to your settings.json:\
"path-autocomplete.pathMappings": {\
"@images": "@{folder}/src/images",\
"@styles": "@{folder}/src/styles",\
"@js": "@{folder}/src/js"\
}
