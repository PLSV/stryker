module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "node"],
  testEnvironment: "jest-environment-jsdom",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
  testRunner: "jest-jasmine2",
  testResultsProcessor: "my-awesome-testResultProcessor",
  collectCoverage: true,
  verbose: true,
  bail: false
}