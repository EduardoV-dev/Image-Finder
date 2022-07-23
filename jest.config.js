module.exports = {
    rootDir: ['./src'],
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    modulePaths: ['<rootDir>/src'],
};
