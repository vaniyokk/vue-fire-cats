module.exports = {
  pwa: {
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
          handler: "cacheFirst"
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\//,
          handler: "cacheFirst"
        },
        {
          urlPattern: /^https:\/\/thecatapi\.com\/api\/images\/get\.php\?id/,
          handler: "cacheFirst"
        },
        {
          urlPattern: /^https:\/\/(\d+)\.media\.tumblr\.com\//,
          handler: "cacheFirst"
        },
        {
          urlPattern: /^http:\/\/(\d+)\.media\.tumblr\.com\//,
          handler: "cacheFirst"
        }
      ]
    }
  }
};
