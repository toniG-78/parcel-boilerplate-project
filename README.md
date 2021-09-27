# Parcel Boilerplate Project ![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)

Basic starter project for building Web Applications with [Parcel](https://parceljs.org/) bundler (using Babel / SCSS / PostCSS for autoprefixing and browser support).

"[Parcel](https://parceljs.org/transforms.html) always uses Babel on all modules to compile modern JavaScript into a form supported by browsers"

### Clone the project

```bash
git clone https://github.com/toniG-78/parcel-boilerplate-project.git
```

### Install dependencies

```
npm install
```

### Run dev server http://localhost:1234

```
npm run dev
```

### Build for production

```
npm run build
```

### Remove `dist/` and `dev-build/` folder

```
npm run clean
```

## Features:

- [Parcel](https://parceljs.org/getting_started.html) (v1).
- ES6 Support ([Babel](https://babeljs.io/)).
- [SCSS](https://sass-lang.com/) (dart-sass).
- [PostCss](https://postcss.org/) (autoprefixing-minify CSS).
- Dev server with hotreloading.

## Notes:

- After running the `npm run build` command, the output JavaScript and CSS files are moved to a separate folder: `dist/`

- If you run `npm run build` it will generate a minified version of the JavaScript and CSS output file.

- After running the `npm run dev` command, the output JavaScript and CSS files are moved to a separate folder: `dev-build/`

- If you run `npm run dev` it will output the JavaScript and CSS bundle in a more readable format for development or debugging.

- Open `.browserslistrc` and configure which browsers should be supported in your app.

- Open `postcss.config.js` for plugins configuration.
