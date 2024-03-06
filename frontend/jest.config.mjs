// ES module syntax with default export
export default {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    // Add other transformations here for .ts or .tsx if using TypeScript
  },
  preset: "ts-jest",
  testEnvironment: "node",
  // other configuration options...
};
