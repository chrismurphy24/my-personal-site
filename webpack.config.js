const path = require('path');
const autoprefixer = require('autoprefixer');

const base_config = {
    mode: 'development',
    entry: ['./public/css/app.scss', './public/js/app.js'],
    output: {
        filename: 'static/js/main-bundle.js',
    },
    module: {
        rules: [
              {
                test: /\.scss$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'static/css/main-bundle.css',
                    },
                  },
                  {loader: 'extract-loader'},
                  {loader: 'css-loader'},
                  {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [autoprefixer()]
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                        //temp workaround
                        webpackImporter: false,
                        // Prefer Dart Sass
                        implementation: require('sass'),
                        sassOptions: {
                            includePaths: ['./node_modules'],
                        },
                    },
                  }
                ],
              },
              {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                  presets: ['@babel/preset-env'],
                },
              }
    ],
    },
};

exports.BASE = base_config;
