module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    images: {
      domains: ['i.imgur.com'],
    },
  }
}
