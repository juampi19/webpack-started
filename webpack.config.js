const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const copyWebpack = require('copy-webpack-plugin');


module.exports = {

    mode: 'development',

    output: {
        clean: true
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
            }
            ,
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new copyWebpack({
            patterns: [
                {from: 'src/assets/', to: 'assets/'}
            ]
        })
      
    ]

}