// sync object
module.exports = {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ['**/src/**/*.ts', '!**/node_modules/**'],
    testMatch: [
        '**/test/*.spec.ts'
    ],
    globals: {
        'ts-jest': {
            useESM: true,
        },
    },
    transform: {},
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['../test']
}