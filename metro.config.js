/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

const src = path.resolve(__dirname, 'src');
const getPath = folder => path.resolve(src, folder);
const internalModules = ['app', 'components'];

const extraNodeModules = {};

internalModules.forEach(folder => {
  extraNodeModules[folder] = getPath(folder);
});

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules,
  },
};
