const path = require("path");
//cjs 형식으로 path 모듈이 작성되었기 때문에 require을 통해 불러와야 한다.
const HtmlWebpackPlugin = require("html-webpack-plugin");
const mode = process.env.NODE_ENV || "development";
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode,
  entry: "./src/main.ts", //이 파일 기준으로 의존성 트리를 만들어 번들링한다.
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts"],
    //웹팩에서 처리해주는 확장자들
    //resolve를 지우면 ts 확장자를 처리할 수 없음
  },
  module: {
    rules: [
      //다양한 확장자를 가진 파일들을 함께 번들링할 수 있다.
      {
        test: /\.ts?$/,
        use: "ts-loader",
        //loader를 통해 모든 ts 파일을 로드한다. js 파일로 변환
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

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"), //번들링한 파일 경로
  },
};
