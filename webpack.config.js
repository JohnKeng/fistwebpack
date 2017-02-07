module.exports = {

  entry: './app/entry.js',

  output: {
    path: './build',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.png$/,use: { loader: 'url-loader', options: { limit: 100000 } },
      },
      {
        test: /\.jpg$/,use: [ 'file-loader' ]
      }
    ]
  },
  plugins: [

  ],
  devServer: {
    port: 3000, // http://localhost:3000
    contentBase: './build',
    inline: true
  }

}
