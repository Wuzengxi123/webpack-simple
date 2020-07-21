const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',    //工作模式   development （开发模式）  production（生产模式）   none（原始模式）
    entry: './src/main.js',  //入口文件   ./  不能省略
    output: {
        filename: 'bundule.js',
        path: path.join(__dirname, 'dist')
    },
    devServer:{
        // contentBase:'./public'
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.vue$/, use: ['vue-loader'] },
            {
                test: /\.png$/, use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 1024   // 10 KB
                    }
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), // 自定清除插件
        new VueLoaderPlugin(),  //vue 模板插件
        new HtmlWebpackPlugin({
            title:'webpack Demo',
            // template:'./public/index.html'
        }),  //自动生成html模板
        // new HtmlWebpackPlugin({
        //     filename:'foot.html'
        // })  
    ]

}