const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: '[name].[contenthash:8].js',
        chunkFilename: '[name].[contenthash:8].chunk.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.tsx$/, use : 'esbuild-loader', exclude: /node_modules/
            },
            {
                test: /\.ts$/, use : 'esbuild-loader', exclude: /node_modules/
            },
            {
                test: /\.s[ca]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      outputPath: 'images/',
                      name: '[name].[ext]',
                      esModule: false,
                    },
                  },
                ],
              },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css',
            chunkFilename: '[name].[contenthash:8].chunk.css',
          }),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        historyApiFallback: true,
    }
    // devServer: {
    //     index: '/public/index.html',
    //     inline: true,
    //     hot: true,
    //     port: 7000,
    //     host: '0.0.0.0',
    //     allowedHosts: ['apidae.local', '.apidae.local', 'front.apidae.localhost', 'plateforme.apidae-tourisme.local'],
    //     historyApiFallback: true,
    //   },
};