const path = require('path');

module.exports = {
  entry: './js/index.jsx',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader", 
        query:
            {
                presets:['@babel/preset-env',
                        '@babel/react',
                        {'plugins': ['@babel/plugin-proposal-class-properties']}]
            },
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  optimization: {
		// We don't want a min version for this open source app
		minimize: false
	},

  output: {
    filename: 'med.js',
    path: path.resolve(__dirname, 'dist'),
  },
};