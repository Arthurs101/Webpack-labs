//plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //css
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//root
const path = require("path")
//configurations
module.exports ={
    mode : "development" ,//dev mode
    entry: { //multiple entry points
        index :"./src/index.js",
        universal: "./src/js/universal.js",
        popularBooks: "/src/Biblioteca/popularBooks.js",
    } ,
    output:{ //multiple outputs
      path: path.resolve(__dirname, 'dist_with_babel'),
      filename: '[name].bundle.js',
    },
    //css plugin for css bundle and HTML BUNDLE
    plugins:[
      ...['Beggining', 'Black', 'BleededToDeath', 'bookTemplate', 'Bright', 
      'fall', 'fall2', 'fall3', 'habitacion', 'highway', 'index', 'jump', 'livinroom', 
      'North', 'wakeUp'].map((event) =>
        new HtmlWebpackPlugin({
            template: `./src/History/${event}.html`,
            filename: `History/${event}.html`,
            chunks: 'universal'
          })
        )
       ,
       
        new HtmlWebpackPlugin({
            template: `./src/Biblioteca/newReleases.html`,
            filename: `Biblioteca/newReleases.html`,
            chunks: ['universal']
          })
        ,
        new HtmlWebpackPlugin({
            template: `./src/Biblioteca/popularBooks.html`,
            filename: `Biblioteca/popularBooks.html`,
            chunks: ['popularBooks','universal']
          })
        ,
        ...['Quijote','Sin_Ajo','sofworld'].map((event) =>
        new HtmlWebpackPlugin({
            template: `./src/Books/${event}.html`,
            filename: `Books/${event}.html`,
            chunks: 'universal'
          })
        )
       ,
       new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index' ,'universal']
    }
  ) ,
//   new HtmlWebpackPlugin({
//     template: './src/CustomElements/BookCard/BookCard.html',
//     filename: 'BookCard.html',
//     chunks: ['BookCard']
//   }
//   ),
      new MiniCssExtractPlugin({
        filename: "[name].css"
      }) ,
      new CleanWebpackPlugin({cleanAfterEveryBuildPatterns: ['dist']})
    ],
    //module rules, creating bundle for a scss
    module: {
      rules: [
        {
          test: /\.(gif|png|jpe?g)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/images/'
              }
            }
          ]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.html$/i,
          use: 'raw-loader',
        },
        {
          test: /\.css$/i,
          use: 'raw-loader',
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /(node_modules)/
        }
      ],
    }

};

