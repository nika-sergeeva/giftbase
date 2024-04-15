import webpack  from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildEnv, BuildPaths } from './config/build/types/config';
import path from 'path';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, './build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }

  const mode = env.mode || 'development';
  const isDev = mode === 'development';

  const PORT = env.port || 3000;
  
  const config: webpack.Configuration = buildWebpack({
    mode,
    paths,
    port: PORT,
    isDev,
  });

  return config;
};