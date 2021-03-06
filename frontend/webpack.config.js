const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: "/node_modules/",
                use: {
                    loader: "awesome-typescript-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            // When using favicons
            favicon: "./public/assets/img/ico/MockchainLogo.ico"
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        historyApiFallback: true
    }
}