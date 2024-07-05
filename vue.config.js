const { defineConfig } = require('@vue/cli-service')
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = defineConfig({
    transpileDependencies: true,
    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        }
    },
    configureWebpack: {
        plugins: [
            new InjectManifest({
                swSrc: './src/service-worker.js',
                swDest: 'service-worker.js',
                //exclude: [/img\/.*/],
            }),
        ],
    },
})