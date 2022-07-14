const { alias } = require('react-app-rewire-alias');

module.exports = {
    webpack: (config) => {
        alias({
            '@components': './src/components',
            '@modules': './src/modules',
            '@routes': './src/routes',
            '@pages': './src/pages',
            '@assets': './src/assets',
            '@services': './src/services',
            '@redux': './src/redux',
            '@hooks': './src/hooks',
        })(config);

        return config;
    },
};
