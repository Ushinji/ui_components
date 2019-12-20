const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    main: './frontend/index.tsx',
  },
  output: {
    path: path.join(__dirname, './public/dist'),
    filename: '[name]-[hash].js',
    publicPath: `http://localhost:3010/`,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@frontend': path.resolve(__dirname, 'frontend'),
      '@server': path.resolve(__dirname, 'server'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [new ManifestPlugin()],
  devServer: {
    contentBase: '../public/dist',
    port: 3010,
    disableHostCheck: true,
    host: '0.0.0.0',
  },
};
