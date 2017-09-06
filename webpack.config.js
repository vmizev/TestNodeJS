"use strict";

module.exports = {
    entry: "./js/main.js",
    output: {
        path: __dirname + "/js",
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },

    watch: true,

    devServer: {
        host: 'localhost',
        port: 8080
    }
};