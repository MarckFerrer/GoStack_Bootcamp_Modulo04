/**
 * Babel will exported as a preset and it'll be used as the conversor, allowing the browser to
 * interpret react and its libraries
 */

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['@babel/plugins-proposal-class-properties'],
};
