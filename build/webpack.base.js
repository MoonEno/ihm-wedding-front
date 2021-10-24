/*
    TODO : 공통된 webpack 설정은 분리 작업
    
*/

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".ts", ".js", ".jsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
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
    path: path.resolve(`${__dirname}/dist`),
    publicPath: "/",
    filename: "site.js",
  },
};
