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

## Manual modification of existing monorepo

1.- Let's suppose you have a react app called _front_, then:

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

¿ How many .. in @source ?

The double dots in @source, in this case three, are one for each ancestor folder up to the root of the monorepo. From there
tailwind will look for the files of source code to inspect and find its classes. You may change this to be more specific to 
where your source code is.

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
