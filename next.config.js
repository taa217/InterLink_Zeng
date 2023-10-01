module.exports = (phases,{defaultConfig}){

const NextConfig = {
  experimental:{
    topLevelAwait: true,
  },
  elsint: {
    ignoreDuringBuilds: true,
  }
};
  return NextConfig
};
