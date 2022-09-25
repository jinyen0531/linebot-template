const NodemonPlugin = require('nodemon-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    plugins: [
        new NodemonPlugin(),
    ]
};