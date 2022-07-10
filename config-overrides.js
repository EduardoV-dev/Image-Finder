const { alias } = require('react-app-rewire-alias');

module.exports = {
    webpack: (config) => {
        alias({
            '@components': './src/components',
            '@modules': './src/modules',
            '@routes': './src/routes',
            '@pages': './src/pages',
            '@consts': './src/consts',
            '@images': './public/assets/images',
            '@utils': './src/utils',
            '@services': './src/services',
            '@redux': './src/redux',
            '@hooks': './src/hooks',
        })(config);

        return config;
    },
};
