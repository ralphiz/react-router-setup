module.exports = {
  entry: './src/main.js',
  output: {
    path: './src',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './src',
    port: 3333
  },
  module: {
    loaders: [
      {
        text: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}