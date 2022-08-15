module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|svg?component)$':
            '<rootDir>/src/test/file-transformer.js',
    },
    moduleNameMapper: {
        '\\.(css|scss)': 'identity-obj-proxy',

        '^@assets(.*)$': '<rootDir>/src/assets$1',
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@config(.*)$': '<rootDir>/src/config$1',
        '^@features(.*)$': '<rootDir>/src/features$1',
        '^@hooks(.*)$': '<rootDir>/src/hooks$1',
        '^@lib(.*)$': '<rootDir>/src/lib$1',
        '^@providers(.*)$': '<rootDir>/src/providers$1',
        '^@routes(.*)$': '<rootDir>/src/routes$1',
        '^@store(.*)$': '<rootDir>/src/store$1',
        '^test-utils(.*)$': '<rootDir>/src/test/utils.js',
    },
    testMatch: ['**/__tests__/**/*.(test|spec).js'],
};
