define('MK.appLoader', ['MK'], function (mk) { return mk.appLoader })
define('MK.utils', ['MK'], function (mk) { return mk.utils })
define('MK.metaEngine', ['MK'], function (mk) { return mk.metaEngine })

define('lodash.merge', ['lodash'], function (lodash) { return lodash.merge })
define('lodash.curry', ['lodash'], function (lodash) { return lodash.curry })
define('lodash.isequal', ['lodash'], function (lodash) { return lodash.isEqual })
define('lodash.isEqual', ['lodash'], function (lodash) { return lodash.isEqual })
define('lodash.flow', ['lodash'], function (lodash) { return lodash.flow })
define('lodash.throttle', ['lodash'], function (lodash) { return lodash.throttle })
define('lodash.debounce', ['lodash'], function (lodash) { return lodash.debounce })
define('lodash.memoize', ['lodash'], function (lodash) { return lodash.memoize })
define('lodash.keys', ['lodash'], function (lodash) { return lodash.keys })
define('lodash.get', ['lodash'], function (lodash) { return lodash.get })
define('lodash.set', ['lodash'], function (lodash) { return lodash.set })
define('lodash.has', ['lodash'], function (lodash) { return lodash.has })
define('lodash.isarray', ['lodash'], function (lodash) { return lodash.isArray })
define('lodash.isArray', ['lodash'], function (lodash) { return lodash.isArray })
define('lodash.issymbol', ['lodash'], function (lodash) { return lodash.isSymbol })
define('lodash.isSymbol', ['lodash'], function (lodash) { return lodash.isSymbol })
define('lodash.eq', ['lodash'], function (lodash) { return lodash.eq })

function fix(target) { return window.getBaseUrl ? window.getBaseUrl() + target : target }

require.config({
    paths: {
        'react': fix('react.development'),
        'react-dom': fix('react-dom.development'),
        'prop-types': fix('prop-types'),
        'redux': fix('redux'),
        'react-redux': fix('react-redux'),
        "moment": fix('moment-with-locales'),
        'lodash': fix('lodash'),
        'immutable': fix('immutable'),
        'MK': fix('mk-core')
    },
    shim: {
    },
    map: {
        '*': {
            css: fix('css.js')
        }
    },
    waitSeconds: 0
})

require(['MK'], function (mk) {
    window.MK = mk
    window['main'] && window['main'](mk)
})
