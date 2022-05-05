import webpackConfig from "./webpack.config";
import { Config, ConfigOptions } from "karma";

export default (config: Config): void => {
  config.set({
    plugins: [
      "karma-webpack",
      "karma-jasmine",
      "karma-chrome-launcher",
      "karma-jasmine-html-reporter",
    ],

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "./",

    singleRun: true,  // run and exit for CI pipelines, lol

    client: {
      clearContext: false, // will show the results in browser once all the testcases are loaded
    },

    reporters: ["kjhtml", "progress"],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine", "webpack"],

    // list of files / patterns to load in the browser
    // Here I'm including all the Jest tests which are all under the __tests__ directory.
    // You may need to tweak this pattern to find your test files/
    files: [
      { pattern: "test/**/*.spec.ts", watched: false, included: true, served: true },
      { pattern: "**/*.wasm", watched: false, included: false, served: true },
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // Use webpack to bundle our tests files
      "test/**/*.spec.ts": ["webpack"],
    },
    // "Chrome", "ChromeHeadless"
    browsers: ["ChromeHeadless"],

    webpackMiddleware: {
      stats: "errors-only",
      bail: true,
    },

    port: 9876,

    colors: true,

    // autoWatch: false,
    logLevel: config.LOG_INFO,

    webpack: webpackConfig,
  } as ConfigOptions);
};
