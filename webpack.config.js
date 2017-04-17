const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const autoprefixer = require('autoprefixer')
require("babel-polyfill")
const path = require('path')
const isProd = process.env.ENV !== 'development'

console.log('Running webpack with ' + (isProd ? 'PRODUCTION' : 'DEVELOPMENT') + ' config.')

const getPlugins = () => {
  const plugins = []

  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': isProd ? JSON.stringify('production') : JSON.stringify('development')
    }
  }))

  plugins.push(new CleanWebpackPlugin([ 'public' ], {
    root: __dirname,
    verbose: true,
    dry: false,
    exclude: [ '' ]
  }))

  if (!isProd) {
    plugins.push(new DashboardPlugin())
  }

  if (isProd) {
    //only push these if prod
    plugins.push(new webpack.optimize.DedupePlugin())
    plugins.push(new webpack.optimize.OccurenceOrderPlugin())
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourcemap: false,
      minimize: true,
      mangle: {
        except: [ '$super', '$', 'exports', 'require', '$q', '$ocLazyLoad' ]
      }
    }))
    //copy the index to {ouput}/index.html
    plugins.push(new CopyWebpackPlugin([
      { from: 'index.html' },
      { from: 'src/static' }
    ]))
  }

  //always push this
  plugins.push(new ExtractTextPlugin('stylesheets/app.css', {
    allChunks: true
  }))

  return plugins
}


const config = {
  context: __dirname,
  entry: [ 'babel-polyfill', './src/index.js' ],
  devtool: !isProd ? 'eval' : false,
  debug: !isProd ? true : false,
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js',
    sourceMapFilename: "bundle.js.map"
  },
  resolve: {
    modulesDirectories: [ 'node_modules', 'src', 'src/containers', 'src/components', 'src/components/Header', 'src/actions', 'src/reducers', 'src/services', 'src/img' ],
    extensions: [ "", ".js", ".scss", ".css" ]
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: [ '/node_modules/', '/build/' ]
      }
    ],
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        loader: 'babel',
        query: {
          presets: [ "react", "es2015", "stage-0" ]
        }
      },
      // {
      //   test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ico|pdf)$/,
      //   exclude: /\/public\/fonts\**$/,
      //   loader: 'file-loader?name=[name].[ext]',
      // },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ico|pdf)$/,
        exclude: /\/public\/fonts\**$/,
        loader: 'url-loader',
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules(?!\/react-datepicker|\/react-spinkit|\/react-datetime)/,
        loader: ExtractTextPlugin.extract("style-loader","css-loader!postcss-loader!sass-loader")
      },
      { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
      { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
      { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
      { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
      { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    headers: { "Access-Control-Allow-Origin": "https://verify.ceterusinsight.com", "Access-Control-Allow-Credentials": "true" }
  },
  eslint: {
    configFile: './.eslintrc'
  },
  postcss: [ autoprefixer({ browsers: [ 'last 4 versions' ]}) ],
  plugins: getPlugins()
}


module.exports = config
