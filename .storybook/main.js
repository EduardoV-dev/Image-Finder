const path = require('path');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-create-react-app',
        'storybook-addon-react-router-v6',
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,

            '@components': path.join(__dirname, '../src/components'),
            '@modules': path.join(__dirname, '../src/modules'),
            '@routes': path.join(__dirname, '../src/routes'),
            '@pages': path.join(__dirname, '../src/pages'),
            '@assets': path.join(__dirname, '../src/assets'),
            '@services': path.join(__dirname, '../src/services'),
            '@store': path.join(__dirname, '../src/store'),
            '@hooks': path.join(__dirname, '../src/hooks'),
        };
        return config;
    },
};
