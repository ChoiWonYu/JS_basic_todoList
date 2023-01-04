const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const mode = process.env.NODE_ENV || "development";
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode,
  entry: "./src/main.ts", //이 파일 기준으로 의존성 트리를 만들어 번들링한다.
  devtool: "inline-source-map",

  module: {
    rules: [
      //다양한 확장자를 가진 파일들을 함께 번들링할 수 있다.
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    //html 파일을 build 디렉터리에 같이 추가,
    new CleanWebpackPlugin(),
    //빌드때마다 build 폴더 초기화
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"), //번들링한 파일 경로
  },
};
