// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
// };


const rootImportOpts = {
  root: __dirname,
  rootPathPrefix: '~/',
  rootPathSuffix: 'src',
};
 
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: [['babel-plugin-root-import', rootImportOpts], 'react-native-reanimated/plugin']
    },
  },
  plugins: [['babel-plugin-root-import', rootImportOpts], 'react-native-reanimated/plugin' ]
};