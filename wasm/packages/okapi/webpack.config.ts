import { resolve } from "path";
import { Configuration, ProvidePlugin, SourceMapDevToolPlugin } from "webpack";

const config: Configuration = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    wallet: "./test/web.spec.ts",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      buffer: require.resolve("buffer")
    },
  },
  output: {
    path: resolve(__dirname, "./test/build"),
    filename: "[name].bundle.js",
    libraryExport: 'default'
  },
  plugins: [
    new SourceMapDevToolPlugin({
      filename: null,
      test: /\.(ts|js)($|\?)/i,
    }),
    new ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ],
  experiments: {
    asyncWebAssembly: true,
  },
  stats: {
    errorDetails: true,
  },
};

export default config;
