const path = require('path');

module.exports = {
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'es',
        preload: ['en', 'es'],
    },
    // react: { useSuspense: false },
    localePath: path.resolve('./public/locales')
}