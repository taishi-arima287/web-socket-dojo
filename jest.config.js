module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/tests/jest.customMatchers.ts", "@testing-library/jest-dom"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["/node_modules/(?!(@storybook/.*)/)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
