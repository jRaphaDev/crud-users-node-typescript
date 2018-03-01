module.exports = function(config) {
  config.set({

    frameworks: ["mocha", "chai", "sinon", "karma-typescript"],

      files: [
          { pattern: "src/**/*.ts" },
          { pattern: "test/**/*.ts" }
      ],

      preprocessors: {
          "src/**/*.ts": ["karma-typescript", "coverage"],
          "test/**/*.ts": ["karma-typescript"]
      },

      reporters: ["progress", "coverage", "karma-typescript"],

      browsers: ["PhantomJS"]
  });
};