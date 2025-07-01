# nx-tw-4

NX monorepo React project configured with modern tailwind 4 integration.

## Quickstart

```bash
git clone https://github.com/hanspoo/nx-tw-4
cd nx-tw-4/
npm install
nx serve front
```

In this project tailwind is configured directly in the Vite configuration file, following the integration approach recommended in the official Tailwind 4 documentation for the latest version.

Additionally, the project is also working with DaisyUI.

The reason for this is that the current NX generator still uses the old Tailwind setup based on PostCSS, which is now deprecated.

## Steps

1.- Create and nx monorepo project with a react application with tailwind called _front_, then:

```bash
rm apps/front/postcss.config.js
```

```bash
npm install tailwindcss@4 @tailwindcss/vite daisyui
```

### apps/front/src/styles.css

```css
@import 'tailwindcss';
@plugin "daisyui";
@source "../../..";
```

### apps/front/vite.config.ts

```js
import tailwindcss from '@tailwindcss/vite';
...
plugins: [tailwindcss(), react()],
```

### apps/front/package.json

Add

```json
"type": "module",
```

### Library Support

If you have a library for which you want to add tailwind, follow the same steps as above.

If you add a `css` file in your library, then you have to import the css file into your application's css for it to work.

Example: 

```css
@import '../../../libs/mylibrary/src/styles.css';
```
