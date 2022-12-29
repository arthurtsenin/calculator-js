module.exports = {
  rootDir: `./src`,
  transform: {
    "^.+\\.js?$": `babel-jest`,
  },
  testRegex: `.test.(js?)$`,
  moduleFileExtensions: [`js`, `json`, `node`],
};
