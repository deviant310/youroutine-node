const Path = require('path');
const { readdirSync, existsSync, rmSync, lstatSync } = require('fs');

const NodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const mode = isProduction ? 'production' : 'development';

const entryPath = Path.resolve(process.cwd(), 'src');
const outputPath = Path.resolve(process.cwd(), 'build');

const frontendEntryPath = Path.resolve(entryPath, 'frontend');
const backendEntryPath = Path.resolve(entryPath, 'backend');

const getAliases = sourcePath => {
  return readdirSync(sourcePath).reduce((obj, dirent) => {
    let path = Path.resolve(sourcePath, dirent);
    if(lstatSync(path).isDirectory())
      obj[dirent] = path;
    return obj;
  }, {});
}

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
  }
}

existsSync(outputPath) && rmSync(outputPath, {
  recursive: true
});

module.exports = [frontendConfig, backendConfig];