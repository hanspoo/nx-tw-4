# nx-tw-4

NX monorepo React project configured with modern tailwind 4 integration.

## Quickstart

```bash
git clone https://github.com/hanspoo/nx-tw-4
cd nx-tw-4/
npm install
nx serve <APP>
```

In this project tailwind is configured directly in the Vite configuration file, following the integration approach recommended in the official Tailwind 4 documentation for the latest version.

Additionally, the project is also working with DaisyUI.

The reason for this is that the current NX generator still uses the old Tailwind setup based on PostCSS, which is now deprecated.

## Manual modification of existing monorepo

1.- Let's suppose you have a react app called <APP\>, then:

```bash
rm apps/<APP>/postcss.config.js
```

```bash
npm install tailwindcss@4 @tailwindcss/vite daisyui
```

### apps/<APP\>/src/styles.css

```css
@import 'tailwindcss';
@plugin "daisyui";
@source "../../..";
```

¿ How many .. in @source ?

The double dots in @source, in this case three, are one for each ancestor folder up to the root of the monorepo. From there
tailwind will look for the files of source code to inspect and find its classes. You may change this to be more specific to 
where your source code is.

### apps/<APP\>/vite.config.ts

```js
import tailwindcss from '@tailwindcss/vite';
...
plugins: [tailwindcss(), react()],
```

### apps/<APP\>/package.json

Add

```json
"type": "module",
```

Not sure if this last one is needed, by default we use typescript with modular javascript, so it would be redundant, i remember i had some trouble
that was fixed putting this, may be the .ts extension in vite config is enough, i will check out.

### Library Support

If you have a library for which you want to add tailwind, follow the same steps as above.

If you add a `css` file in your library, then you have to import the css file into your application's css for it to work.

Example: 

```css
@import '../../../libs/mylibrary/src/styles.css';
```
