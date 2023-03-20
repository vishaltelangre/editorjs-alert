module.exports = (env, argv) => {
  const { mode } = argv;

  return {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          ],
        },
        {
          test: /\.s?[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader',
          options: {
            removeSVGTagAttrs: false,
          },
        },
      ],
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: mode === 'production' ? 'bundle.js' : `${mode}.bundle.js`,
      library: 'Alert',
      libraryTarget: 'umd',
      libraryExport: 'default',
    },
  };
};
