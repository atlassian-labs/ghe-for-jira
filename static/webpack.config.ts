import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin = require('html-webpack-plugin');
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const resolveModulePath = (moduleName: string): string => {
    return require.resolve(moduleName);
};

const config: webpack.Configuration = {
    entry: { index: './src/index.tsx' },
    devtool: 'inline-source-map',
    target: 'node',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/index.html'
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [ {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                resolveModulePath('@babel/preset-typescript'),
                                {
                                    isTSX: true,
                                    allExtensions: true
                                }
                            ]
                        ],
                        plugins: [
                            [
                                resolveModulePath('@babel/plugin-transform-react-jsx'),
                            ],
                            resolveModulePath('@forge/babel-plugin-transform-ui'),
                            resolveModulePath('@babel/plugin-proposal-numeric-separator'),
                            resolveModulePath('@babel/plugin-proposal-class-properties')
                        ],
                        cacheDirectory: true
                    }
                }
            ]
        },{
            test: /\.tsx?$/,
            use: {
                loader: 'ts-loader',
                options: {
                    compilerOptions: {
                        jsx: 'react'
                    }
                }
            },
            exclude: /node_modules/,
        } ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

};

export default config;
