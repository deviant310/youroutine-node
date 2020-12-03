const { resolve } = require('path');
const { readdirSync, lstatSync } = require('fs');

const NodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DefinePlugin } = require('webpack');

const entryPath = resolve(process.cwd(), 'src');
const outputPath = resolve(process.cwd(), 'build');
const storagePath = resolve(process.cwd(), 'storage');

const frontendEntryPath = resolve(entryPath, 'frontend');
const backendEntryPath = resolve(entryPath, 'backend');

const parseDirAliases = path => {
  return readdirSync(path).reduce((obj, dirent) => {
    let direntPath = resolve(path, dirent);
    if(lstatSync(direntPath).isDirectory())
      obj[dirent] = direntPath;
    return obj;
  }, {});
};

const buildGlobalsFromAliases = aliases => {
  return Object.entries(aliases).reduce((obj, [key, value]) => {
    obj[`${key.toUpperCase()}_PATH`] = `'${value}'`;
    return obj;
  }, {});
};

module.exports = (env = {}) => {
  const { production } = env;
  const mode = production ? 'production' : 'development';
  const [
    frontendAliases,
    backendAliases
  ] = [frontendEntryPath, backendEntryPath].map(parseDirAliases);
  
  const frontendConfig = {
    entry: {
      index: frontendEntryPath
    },
    mode,
    output: {
      path: resolve(outputPath, 'public'),
      publicPath: '/'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: frontendAliases
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ["@babel/preset-react"],
                plugins: [
                  "@babel/plugin-proposal-class-properties",
                  "@babel/plugin-proposal-export-default-from"
                ]
              }
            },
            {
              loader: 'ts-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader, 'css-loader'
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'img/[path][name].[ext]',
                context: 'src'
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]',
              },
            },
          ],
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(frontendEntryPath, 'index.ejs')
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css'
      })
    ]
  }
  
  const backendConfig = {
    target: 'node',
    externals: [NodeExternals()],
    entry: {
      index: backendEntryPath
    },
    mode,
    output: {
      path: outputPath,
      libraryTarget: "commonjs2",
      libraryExport: 'default'
    },
    resolve: {
      extensions: [ '.ts', '.js'],
      alias: backendAliases
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new DefinePlugin(buildGlobalsFromAliases({
        ...backendAliases,
        ...{
          storage: storagePath
        }
      }))
    ]
  }
  
  return [frontendConfig, backendConfig];
};