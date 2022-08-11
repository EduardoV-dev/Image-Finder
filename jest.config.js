module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    verbose: true,
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|svg?component)$':
            '<rootDir>/src/test/file-transformer.js',
    },
    moduleNameMapper: {
        '\\.(css|scss)': 'identity-obj-proxy',

        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@routes(.*)$': '<rootDir>/src/routes$1',
        '^@modules(.*)$': '<rootDir>/src/modules$1',
        '^@pages(.*)$': '<rootDir>/src/pages$1',
        '^@assets(.*)$': '<rootDir>/src/assets$1',
        '^@services(.*)$': '<rootDir>/src/services$1',
        '^@store(.*)$': '<rootDir>/src/store$1',
        '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    },
};
