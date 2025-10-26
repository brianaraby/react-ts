import 'webpack-dev-server';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { type Configuration } from 'webpack';
import HTMLWebpack from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const isProduction = process.env.NODE_ENV === 'production';
const Dirname = path.dirname(fileURLToPath(import.meta.url));

const Config: Configuration = {
    mode: isProduction ? 'production' : 'development',
    entry: path.resolve(Dirname, 'src/app/Main.tsx'),
    output: {
        path: path.resolve(Dirname, 'build'),
        filename: isProduction ? 'assets/js/[contenthash].js' : 'assets/js/[name].js',
        chunkFilename: isProduction ? 'assets/js/[contenthash].js' : 'assets/js/[name].js',
        assetModuleFilename: 'assets/media/[name][ext]',
        publicPath: '/',
    },

    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpack({
            template: path.resolve(Dirname, 'public/index.html'),
            minify: isProduction ? {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            } : false
        })
    ],

    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', {
                        loader: 'css-loader',
                        options: { 
                            importLoaders: 1, 
                            modules: false 
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    },

    resolve: {
        extensions: [
            '.ts', 
            '.tsx', 
            '.js', 
            '.jsx'
        ],
        alias: {
            '@': path.resolve(Dirname, 'src')
        }
    },

    devServer: {
        port: 5511,
        open: true,
        hot: true,
        historyApiFallback: true,
        static: {
            directory: path.resolve(Dirname, 'public')
        },
        client: {
            overlay: true
        }
    }
}

export default Config;