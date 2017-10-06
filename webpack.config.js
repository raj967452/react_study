const path = require('path');
console.log(process.env.NODE_ENV);


module.exports = {
    entry: './script.js',
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'transplied.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}