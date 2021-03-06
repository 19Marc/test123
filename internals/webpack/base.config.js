import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import paths from '../paths'

const { NODE_ENV } = process.env
const isDev = NODE_ENV === 'development'

module.exports = {
  context: paths.appBuild,
  entry: [isDev && 'react-hot-loader/patch', './index.js'].filter(e => e),
  output: {
    path: paths.outputPath,
    filename: paths.outputName,
    publicPath: '/',
  },
  module: {
    strictExportPresence: NODE_ENV === 'production',
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules|blueprints/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['url-loader?limit=10000&minetype=image/png', 'img-loader'],
      },
      {
        test: /\.(mp4|woff(2)?)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      app: path.resolve(paths.appBuild),
      assets: path.resolve(paths.appBuild, 'assets'),
      pages: path.resolve(paths.appBuild, 'pages'),
      components: path.resolve(paths.appBuild, 'components'),
      modules: path.resolve(paths.appBuild, 'modules'),
      constants: path.resolve(paths.appBuild, 'constants'),
      modals: path.resolve(paths.appBuild, 'modals'),
      forms: path.resolve(paths.appBuild, 'forms'),
    },
    modules: [path.resolve('./'), 'node_modules'],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css', chunkFilename: '[id].css' }),
  ],
}
