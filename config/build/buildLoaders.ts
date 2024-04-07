import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
    const cssLoader = { 
        test: /\.css$/, 
        use: 'css-loader' 
    };
    const typescriptLoader = { 
        test: /\.tsx?$/, 
        use: 'ts-loader',
        exclude: /node_modules/,
     }

     const babelLoader = {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }

    return [
        typescriptLoader,
        babelLoader,
        cssLoader,
    ]
}