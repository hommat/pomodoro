module.exports = {
  entry: {
    main: './src/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader']
      }
    ]
  }
};
