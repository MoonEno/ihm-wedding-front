const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  resolve: {
    extensions: [".tsx", ".ts", ".js", "jsx"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@images": path.resolve("src/assets/images/"),
      "@atoms": path.resolve("src/components/atoms/"),
      "@modules": path.resolve("src/components/modules/"),
      "@molecules": path.resolve("src/components/molecules/"),
      "@organisms": path.resolve("src/components/organisms/"),
      "@templates": path.resolve("src/components/templates/"),
      "@pages": path.resolve("src/pages/"),
      "@lib": path.resolve("src/lib/"),
      "@api": path.resolve("src/api/"),
      "@utils": path.resolve("src/utils/"),
      "@const": path.resolve("src/constants/serviceConstants"),
    },
  },
  entry: {
    app: ["core-js/stable", "./src/index.js"],
  },
  output: {
    path: path.resolve(`${__dirname}/dist/`),
    publicPath: "/",
    filename: "site.js",
  },
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader", { loader: "url-loader" }],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader?-url",
          },
        ],
      },
    ],
  },
  devServer: {
    port: 8080,
    contentBase: path.resolve(`${__dirname}`),
    inline: true,
    writeToDisk: true,
    historyApiFallback: true,
    watchOptions: {
      poll: 5000,
      aggregateTimeout: 1000,
      ignored: ["node_modules"],
    },
    // proxy: {
    //   '/PD': {
    //     target: 'http://localhost:9071/master/api/v1/pd/',
    //     changeOrigin: true,
    //     secure: false,
    //     pathRewrite: {
    //       '/PD/': '/',
    //     },
    //   },
    //   '/CM': {
    //     target: 'http://localhost:9071/master/api/v1/cm/',
    //     changeOrigin: true,
    //     secure: false,
    //     pathRewrite: {
    //       '/CM/': '/',
    //     },
    //   },
    //   '/BD/': {
    //     target: `${domain}/master/api/v1/bd/`,
    //     secure: false,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '/BD/': '/',
    //     },
    //   },
    //   '/PA': {
    //     target: `${domain}/master/api/v1/pa/`,
    //     secure: false,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '/PA/': '/',
    //     },
    //   },
    // },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/images/ico_openmall.ico",
      chunks: ["css", "images", "webfonts"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
