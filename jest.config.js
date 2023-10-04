module.exports = {
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests'
  ],
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  moduleNameMapper: {
    '@/teste/(.+)': '<rootDir>/tests/$1',
    '@/(.+)': '<rootDir>/src/$1'

  },
  transform: {
    '\\.ts$': 'ts-jest'
  }
}
