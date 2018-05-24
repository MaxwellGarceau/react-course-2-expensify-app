const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const EslintPlugin = require('eslint-plugin-import');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  // const eslint = new EslintPlugin();

  console.log('env', env);
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        // {
        //   loader: 'eslint-loader',
        //   // test: /\.js$/,
        //   // exclude: /node_modules/,
        //   options: {
        //     emitError: false,
        //     quiet: true
        //   }
        // },
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }]
    },
    plugins: [
      CSSExtract
      // EslintPlugin
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
};
