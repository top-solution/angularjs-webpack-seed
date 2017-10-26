# AngularJS + webpack seed project

An [AngularJS](https://angularjs.org/) + [webpack](https://webpack.github.io/) seed project, supporting [ES2015+](https://devhints.io/es6) syntax through
[Babel](https://babeljs.io/) compiler; [ESLint](https://eslint.org/) will assist you writing beautiful code.

It comes with preconfigured
- [UI Router](https://ui-router.github.io/ng1/) 1.0.x
- Sass 3 (using [SCSS syntax](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html))
- [Nicolas Gallagher's Normalize.css](http://nicolasgallagher.com/about-normalize-css/)
- `box-sizing: border-box` [as recommended by Paul Irish](https://www.paulirish.com/2012/box-sizing-border-box-ftw/)

## Pre-requisites

Required:
- [Node.js](https://nodejs.org/) with `npm`,
  the current LTS version is an ideal starting point

Recommended:
- [Yarn](https://yarnpkg.com/) a fast and reliable `npm` alternative

Optional:
- [Caddy](https://caddyserver.com/) a very easy HTTP server,
  install only if you want to test the build in a browser

>The following instructions will assume you have installed `yarn`,
you can use `npm` equivalents without known issues.

## Usage

Fork or download the project then install dependencies

```shell
$ yarn install
```

### Development

```shell
$ yarn run dev
```

The project will be available at http://localhost:8000/.

### Building

```shell
$ yarn run build
```

If you want to see the build in a browser run
```shell
$ caddy
```
The build will be available at http://localhost:8001/.

## Contribute

Want to help? Feel free to open any pull request, but please submit only ESLint-warnings-free versions to review.
