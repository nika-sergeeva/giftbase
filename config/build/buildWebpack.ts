import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import webpack from "webpack";

export function buildWebpack(options: BuildOptions): webpack.Configuration { 
    const {mode, paths, port, isDev} = options;
  return {
  mode: mode,
  entry: paths.entry,
  output: {
    path: paths.output,
    filename: '[name].[contenthash].bundle.js',
    clean: true,
  },
  plugins: buildPlugins(paths),
  module: {
    rules: buildLoaders(options),
  },
  resolve: buildResolvers(),
  devtool: isDev? 'inline-source-map': undefined,
  devServer: isDev? buildDevServer(options): undefined,
}
}
