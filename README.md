# Gulp

## For system:

npm i gulp-cli -g\
npm install gulp-postcss --save-dev

## For project:

### Linters:

npm install -D stylelint

### StyleLint plugins

npm install stylelint-no-unresolved-module @namics/stylelint-bem stylelint-use-nesting stylelint-declaration-block-no-ignored-properties stylelint-group-selectors @isnotdefined/stylelint-plugin --save-dev

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
