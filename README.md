# Typescript and Sass Webpack Boilerplate

[![Dependency Status](https://www.gemnasium.com/badges/github.com/ruaqiwei23/typescript_sass_webpack_boilerplate.svg)](https://www.gemnasium.com/github.com/ruaqiwei23/typescript_sass_webpack_boilerplate) [![Build Status](https://travis-ci.org/ruaqiwei23/typescript_sass_webpack_boilerplate.svg?branch=master)](https://travis-ci.org/ruaqiwei23/typescript_sass_webpack_boilerplate)

A simple webpack boilerplate for front end projects using Typescript/Sass.

![TSSW](https://raw.githubusercontent.com/ruaqiwei23/blog/gh-pages/images/tssw.png)

## Installation
1. Install node and yarn. The latest release is preferred. If you still want to use npm, just replace all `yarn` commands below with `npm`.

2. Fork and clone this repository.

3. Run `yarn install` to install dependencies and `yarn run typings install` to install typings.

## Build & Webpack-Dev-Server
1. Write your own Typescript/Sass code in `src/`.

2. Run `yarn run build` will build js/css into `build/`.

3. Run `yarn start` or `yarn run server`, visit `localhost:8080` to use webpack dev server with hot module replacement.

## Linters
Integrated [Tslint](https://github.com/palantir/tslint) and [Stylelint](https://github.com/stylelint/stylelint) to check syntax and coding style automatically when you start dev server or build process.

You can also run `tslint` or `stylelint` directly in the console.

## Test
Use [Karma](https://github.com/karma-runner/karma), [Mocha](https://github.com/karma-runner/karma-mocha) and [Chai](https://github.com/chaijs/chai) for testing purpose.

1. Write your own tests(by default use BDD) in `test/` and name them as `<module name>_test.ts`

2. Simply run `yarn test`

## License
[MIT License](./LICENSE)
