const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './public/**/*.html',
        './src/**/*.vue',
        './src/**/*.js',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    safelist: {
        standard: [
            /^v-/, // Vuetify-Klassen
            /^theme--/, // Vuetify-Themes
            /^application--/, // Vuetify application classes
        ],
        deep: [/^v-/],
    },
});

module.exports = {
    plugins: [
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
            ? [purgecss]
            : []
    ]
};
