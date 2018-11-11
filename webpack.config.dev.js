const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const rootPath = path.resolve(__dirname);
const srcPath = path.resolve(__dirname, 'src');
const publicPath = path.resolve(__dirname, 'public');
const distPath = path.resolve(__dirname, 'dist');
const pagesPath = path.resolve(srcPath, 'pages');
const mainFile = 'index.js';

function getEntryMap() {
  const entryMap = {};
  fs.readdirSync(pagesPath).forEach((pathName) => {
    const fullPathName = path.resolve(pagesPath, pathName);
    const stat = fs.statSync(fullPathName);
    const fileName = path.resolve(fullPathName, mainFile);
    if (stat.isDirectory() && fs.existsSync(fileName)) {
      entryMap[pathName] = fileName;
    }
  });
  return entryMap;
}

function getHtmlArray(entryMap) {
  const htmlArray = [];
  Object.keys(entryMap).forEach((key) => {
    const fullPathName = path.resolve(pagesPath, key);
    const template = path.resolve(fullPathName, 'index.html');
    if (fs.existsSync(template)) {
      htmlArray.push(new HtmlWebpackPlugin({
        filename: `${key}.html`,
        template,
        chunks: [key]
      }));
    }
  });
  return htmlArray;
}

const entryMap = getEntryMap();
const htmlArray = getHtmlArray(entryMap);

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: publicPath,
    hot: true
  },
  entry: entryMap,
  output: {
    path: distPath,
    filename: '[name].[hash:8].min.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: ['babel-loader', 'eslint-loader'], include: rootPath },
      { test: /\.css$/, use: ['style-loader', 'css-loader'], include: srcPath },
      { test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', {
          loader: 'sass-resources-loader',
          options: {
            resources: `${srcPath}/common.scss`
          }
        }],
        include: srcPath },
      { test: /\.(png|svg|jpg|jpeg)$/, use: 'url-loader?limit=8192', include: srcPath }
    ]
  },
  resolve: {
    alias: {
      '@': srcPath
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new StyleLintPlugin()
  ].concat(htmlArray)
};
