module.exports = {
  transform: { "^.+\\.tsx?$": "ts-jest" },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testPathIgnorePatterns: ["/dist/", "/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  collectCoverageFrom: ["src/*/*.{ts,tsx}", "!src/*/index.{ts,tsx}"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
