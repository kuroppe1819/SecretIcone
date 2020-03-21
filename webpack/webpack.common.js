const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const srcDir = '../src/';

module.exports = {
    entry: {
        contentscript: path.join(__dirname, srcDir + 'ts/contentscript.ts'),
        options: path.join(__dirname, srcDir + 'ts/options/Options.tsx'),
        style: path.join(__dirname, srcDir + 'scss/style.scss'),
    },
    output: {
        path: path.join(__dirname, '../dist/'),
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$|\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
        new CopyPlugin([{ from: '.', to: '.' }], { context: 'public' }),
        new MiniCssExtractPlugin({
            filename: 'style/[name].css',
        }),
    ],
};
