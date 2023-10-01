
module.exports = {
  webpack: (config) => {
    // Set topLevelAwait to true
    config.experiments = { ...config.experiments, topLevelAwait: true };

    


    return config;
  },
};
