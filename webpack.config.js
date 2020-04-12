const path = require('path');
const autoprefixer = require('autoprefixer');

const base_config = {
    mode: 'development',
    entry: ['./public/css/app.scss', './public/js/app.js'],
    output: {
        filename: 'static/main-bundle.js',
    },
    module: {
        rules: [
              {
                test: /\.scss$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'static/main-bundle.css',
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

// blog_config = {
//     entry: path.resolve(__dirname, './site_app/client/blog_index.jsx'),
//     modules: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 loader: "babel-loader"
//             }
//         ]
//     }
// };


exports.BASE = base_config;
exports.ALL = [base_config,];
