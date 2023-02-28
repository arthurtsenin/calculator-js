<h1 align="center">JavaScript Calculator</h1>

> Technologies used: HTML, CSS, JS, Webpack, Eslint, Prettier, pre-commit hook, Jest.\
> Patterns used: Command.

## Task

<a href="https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_/view?pli=1">Watch task</a>

## Demo

<a href="https://javascript-calculator-application.netlify.app/">JavaScript Calculator</a>

## How to run the app

**Install**

```sh
npm install
```

**Usage**

```sh
npm run start
```

**Run tests**

```sh
npm run test
```

**Build**

```sh
npm run build
```

## Folders structure
1. `.husky` - this folder consists of the files needed for the configuration of pre-commit hook;

2. `src` - the main folder of the app which contains `index.html` file, `style.css` file, folder with `scripts`;
   - `scripts` consists of : main `script.js` file, `calculator` folder and `calculatorInterface` folder.
      - `calculator` - the folder which consists of script files used in pattern command for calculator app: calculator commands , calculator invoker, folder with calculator recivers, folders with math commands, folders with memory commands . js file with tests for math operation is also in this folder;
      - `calculatorInterface` - consists of js files necessary for theme change in the app and implements the user's interface;

3. other js,json files necessary for Webpack, Eslint, Prettier, pre-commit hook, Jest setup.

