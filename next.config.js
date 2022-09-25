module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // future: {
  //   webpack5: true,
  // },
  // webpack: (config) => {
  //   config.resolve.fallback = {
  //     ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
  //     // by next.js will be dropped. Doesn't make much sense, but how it is
  //     fs: false, // the solution
  //     child_process: false, // the solution
  //   };

  //   return config;
  // },
};
