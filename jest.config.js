module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  transform: {
    '\\.ts$': 'ts-jest'
  }
}
