const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const copyWebpack = require('copy-webpack-plugin');

const cssMinimizer = require('css-minimizer-webpack-plugin');
const terzer = require('terser-webpack-plugin');


module.exports = {

    mode: 'production',

    output: {
        clean: true,
        filename: 'main.[fullhash].js'
    },


    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false
                },
            },

            {
                test: /\.(c|sc|sa)ss$/,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new cssMinimizer(),
            new terzer(),
        ]
    },


    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),
        new copyWebpack({
            patterns: [
                {from: 'src/assets/', to: 'assets/'}
            ]
        })
      
    ]

}