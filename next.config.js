module.exports = {
  webpack: (config) => {
    // Set topLevelAwait to true
    config.experiments = { ...config.experiments, topLevelAwait: true };

    // Set timeout to 120 seconds
    config.staticPageGenerationTimeout = 120;

    return config;
  },
};
