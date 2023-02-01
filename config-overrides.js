// eslint-disable-next-line @typescript-eslint/no-var-requires
const { override } = require('customize-cra');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { aliasDangerous, configPaths } = require('react-app-rewire-alias/lib/aliasDangerous');

module.exports = {
  webpack: override(aliasDangerous(configPaths('./tsconfig.paths.json'))),
};
