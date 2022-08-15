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

            '@assets': path.join(__dirname, '../src/assets'),
            '@components': path.join(__dirname, '../src/components'),
            '@config': path.join(__dirname, '../src/config'),
            '@features': path.join(__dirname, '../src/features'),
            '@hooks': path.join(__dirname, '../src/hooks'),
            '@lib': path.join(__dirname, '../src/lib'),
            '@providers': path.join(__dirname, '../src/providers'),
            '@routes': path.join(__dirname, '../src/routes'),
            '@store': path.join(__dirname, '../src/store'),
            '@test': path.join(__dirname, '../src/test'),
        };
        return config;
    },
};
