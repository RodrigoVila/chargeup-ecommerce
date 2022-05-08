module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    images: {
      domains: ['i.imgur.com'],
    },
  }
}
