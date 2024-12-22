import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshPlugin from '@rspack/plugin-react-refresh';
import { rspack } from '@rspack/core';

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './main.tsx',
  mode: isDevelopment ? 'development' : 'production',
  output: {
    path: path.join(__dirname, './dist/test-1'),
    filename: !isDevelopment ? '[name].[contenthash].js' : '[name].js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  experiments: {
    css: true,
    incremental: true,
  },
  module: {
    parser: {
      'css/auto': {
        namedExports: false,
      },
    },
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
              transform: {
                react: {
                  runtime: 'automatic',
                  development: isDevelopment,
                  refresh: isDevelopment,
                },
              },
            },
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'sass-loader',
            options: {
              // using `modern-compiler` and `sass-embedded` together significantly improve build performance,
              // requires `sass-loader >= 14.2.1`
              api: 'modern-compiler',
              implementation: require.resolve('sass-embedded'),
            },
          },
        ],
        // set to 'css/auto' if you want to support '*.module.(scss|sass)' as CSS Modules, otherwise set type to 'css'
        type: 'css/auto',
        // use: [
        //   !isDevelopment
        //     ? rspack.CssExtractRspackPlugin.loader
        //     : 'style-loader',
        // ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
        type: 'asset/resource',
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    port: 4200,
    historyApiFallback: {
      index: '/index.html',
      disableDotRule: true,
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    },
    hot: true,
  },
  plugins: [
    isDevelopment && new ReactRefreshPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      base: '/',
    }),
    new rspack.CssExtractRspackPlugin({
      filename: !isDevelopment ? '[name].[contenthash].css' : '[name].css',
    }),
    new rspack.CopyRspackPlugin({
      patterns: [
        { from: 'favicon.ico', to: '' },
        { from: 'assets', to: 'assets' },
      ],
    }),
  ].filter(Boolean),
  optimization: {
    minimize: !isDevelopment,
  },
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
};
