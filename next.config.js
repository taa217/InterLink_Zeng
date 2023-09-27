/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config) => {
    // this will override the experiments
    config.experiments = { ...config.experiments, topLevelAwait: true };
    config.staticPageGenerationTimeout = {config.staticPageGenerationTimeout : 120};
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true 
    return config;
  },
};
