const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const isDev = process.env.NODE_ENV === "development" ? true : false;

const envFile = isDev ? "./.env.development" : "./.env.production";

module.exports = {
  mode: isDev ? "development" : "production",
  entry: "./src/index.tsx", // 入口文件
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 将 @ 映射到 src 目录
    },
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // 匹配 .ts 和 .tsx 文件
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i, // 处理 CSS 文件
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // 处理图片文件
        type: "asset/resource",
      },
    ],
  },
  devtool: "source-map", // 开启源映射，便于调试
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // 指定静态资源目录
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 生成 HTML 文件
      favicon: "./public/favicon.png", // 指定 favicon 路径
    }),
    new Dotenv({ path: envFile }),
  ],
};
