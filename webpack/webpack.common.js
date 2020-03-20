const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const srcDir = '../src/';

module.exports = {
    entry: {
        contentscript: path.join(__dirname, srcDir + 'contentscript.ts'),
        options: path.join(__dirname, srcDir + 'options/Options.tsx'),
        background: path.join(__dirname, srcDir + 'background.ts'),
    },
    output: {
        path: path.join(__dirname, '../dist/js'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [new CopyPlugin([{ from: '.', to: '../' }], { context: 'public' })],
};
