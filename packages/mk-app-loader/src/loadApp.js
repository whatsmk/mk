import appFactory from './appFactory'

const appConfig = (apps, options) => {
    Object.keys(options).forEach(key => {
        const reg = new RegExp(`^${key == '*' ? '.*' : key}$`)
        Object.keys(apps).forEach(appName => {
            if (appName != 'config') {
                if (reg.test(appName)) {
                    apps[appName].config && apps[appName].config(options[key])
                }
            }
        })
    })
}


export default function loadApp(app, isProduction) {
    var urls = [],
        options ={}
    
    if(typeof app == 'string'){
        urls.push(app)
    }
    else if(app instanceof Array){
        app.forEach(o=>{
            if(typeof o == 'string'){
                urls.push(o)
            }
            else if(typeof o == 'object' && o.url){
                urls.push(o.url)
                if(o.name && o.option)
                    options[o.name] = o.option
            }
        })
    }
    else if(typeof app == 'object' && app.url){
        urls.push(o.url)
        if(app.name && app.option)
            options[app.name] = app.option
    }

    if(!window.require || urls.length == 0)
        return Promise.resolve(null)
    
    
    return new Promise((resolve,reject)=>{
        urls.forEach(url => {
            var appName = url.substr(url.lastIndexOf('/') + 1).replace(/(\.js)|(\.min\.js)/, ''),
                pub = url.indexOf('/') ? url.substr(0, url.lastIndexOf('/') + 1) : ''
            window[`__pub_${appName}__`] = pub
        })

        urls = urls.map(u=>isProduction?(u+'.min'):u)
        const appCount = urls.length
        urls = urls.concat(urls.map(u => `css!${u}`))

        window.require(urls, (...args) => {
            const apps = args.slice(0, appCount).reduce((prev, curr) => ({ ...prev, [curr.name]: curr }), {})
            appFactory.registerApps(apps)
          
            appConfig(appFactory.getApps(), { 
                "*": { apps: { ...appFactory.getApps() } },
                ...options
            })
          
            resolve(null)
        })
    })
    
}