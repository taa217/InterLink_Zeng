
module.exports = {
  webpack: (config) => {
    saticPageGenerationTimeout: 300 ;
    // Set topLevelAwait to true
    config.experiments = { ...config.experiments, topLevelAwait: true };

    


    return config;
  },
};
