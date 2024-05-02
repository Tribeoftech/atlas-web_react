module.exports = {
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.js",
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
