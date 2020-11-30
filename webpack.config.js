const Path = require('path');
const { readdirSync, lstatSync } = require('fs');

const NodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DefinePlugin } = require('webpack');

const entryPath = Path.resolve(process.cwd(), 'src');
const outputPath = Path.resolve(process.cwd(), 'build');

const frontendEntryPath = Path.resolve(entryPath, 'frontend');
const backendEntryPath = Path.resolve(entryPath, 'backend');

const getAliases = (sourcePath, fsResolve = false) => {
  return readdirSync(sourcePath).reduce((obj, dirent) => {
    let path = Path.resolve(sourcePath, dirent);
    if(lstatSync(path).isDirectory()){
      if(fsResolve)
        obj[[dirent.toUpperCase(), 'PATH'].join('_')] = `'${path}'`;
      else
        obj[dirent] = path;
    }
    return obj;
  }, {});
}

module.exports = (env = {}) => {
  const { production } = env;
  const mode = production ? 'production' : 'development';
  
  const frontendConfig = {
    entry: {
      index: frontendEntryPath
    },
    mode,
    output: {
      path: Path.resolve(outputPath, 'public'),
      publicPath: '/'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: getAliases(frontendEntryPath)
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
        template: Path.resolve(frontendEntryPath, 'index.ejs')
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
      alias: getAliases(backendEntryPath)
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
      new DefinePlugin(getAliases(backendEntryPath, true))
    ]
  }
  
  return [frontendConfig, backendConfig];
}