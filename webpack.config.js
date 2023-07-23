// path — встроенный в Node.js модуль
const path = require('path')
const pathSrc = path.resolve(__dirname, './src/')
// путь к папке билда
const pathDest = path.resolve(__dirname, './dist/')

// Очищает выходной каталог при каждом запуске сборщика webPack
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// Создает html c подключенным js
const HtmlWebpackPlugin = require('html-webpack-plugin')
// Сжатие JS
const TerserPlugin = require('terser-webpack-plugin')
// Отдельный файл css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//  Минификация css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// Копирование файлов без обработки
const CopyPlugin = require('copy-webpack-plugin')
//
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    mode: 'development',
    // mode: 'production',
    target: 'web',
    // target: 'node',
    devtool: 'inline-source-map',
    stats: 'all',

    // Указываем путь до входной точки:
    entry: {
        index: pathSrc + '/js/pages/index.js',
        404: pathSrc + '/js/pages/404.js',
    },
    // Описываем, куда следует поместить результат работы:
    output: {
        // Путь до директории
        path: pathDest,
        // Имя файла со сборкой:
        filename: 'js/[name].bundle.min.js',
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },
    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // css
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name]123.[ext]',
                },
            },
            // Шрифты
            {
                test: /\.(ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[ext]',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        // Добавляем несколько страниц html
        new HtmlWebpackPlugin({
            template: pathSrc + '/html/complite/index.html', // шаблон
            inject: 'body',
            filename: 'index.html', // название выходного файла
            // Указываем какой js файл подключать
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: pathSrc + '/html/complite/404.html', // шаблон
            inject: 'body',
            filename: '404.html', // название выходного файла
            // Указываем какой js файл подключать
            chunks: ['404'],
        }),
        new CopyPlugin({
            patterns: [
                { from: pathSrc + '/images/dist/', to: 'images' },
                // { from: pathSrc + '/fonts/dist/', to: 'fonts' },
            ],
        }),
        new MiniCssExtractPlugin({
            // Один файл стилей для всех страниц
            filename: 'css/style.min.css',

            // Отдельный файл на каждую страницу (не уверен что правильно делать для каждой страницы свой файл стилей)
            // Надо в js файлах менять подключенный файл css
            // filename: 'css/[name].min.css',
        }),
        // Это вместо devServer работает просто пушка Мне нравиться больше Хоте и devServer я не отключаю
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] },
        }),
    ],
    devServer: {
        compress: true,
        port: 3030,
        open: true,
        hot: true,
        client: {
            logging: 'info',
            progress: true,
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
}
