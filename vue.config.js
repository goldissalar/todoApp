const { defineConfig } = require('@vue/cli-service')
/*module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/todoApp/" : "/",
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})*/

module.exports = defineConfig({
    transpileDependencies: true,
    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        }
    },
    /*pwa: {
        workboxOptions: {
            runtimeCaching: [
                {
                    urlPattern: new RegExp('https://65c7a2b5e7c384aada6ec54f.mockapi.io/todos'),
                    handler: "CacheFirst",
                    options: {
                        cacheName: 'todos-cached',
                        expiration: {
                            maxAgeSeconds: 7 * 24 * 60 * 60 // 1 week
                        },
                    }
                }
            ]
        }
    }*/
})