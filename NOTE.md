# Using old tailwindcss package

- Info: https://tailwindcss.com/docs/installation#post-css-7-compatibility-build

Install OLD package:
``` bash
npm uninstall tailwindcss postcss autoprefixer
npm install tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

yarn remove tailwindcss postcss autoprefixer
yarn add tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

Install NEW package:
``` bash
npm uninstall tailwindcss @tailwindcss/postcss7-compat
npm install tailwindcss@latest postcss@latest autoprefixer@latest

yarn remove tailwindcss @tailwindcss/postcss7-compat
yarn add tailwindcss@latest postcss@latest autoprefixer@latest
```
