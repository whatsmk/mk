import config from './config'

class appFactory {
    constructor() {
        this.apps = {}
        window.__mk_apps__ = this.apps
    }

    registerApp = (name, app) => {
        if (this.apps[name]) {
            console.log(`已经注册过这个app，name: ${name},忽略`)
            return
        }
        //throw `已经注册过这个app，不能重复注册. name: ${name}`

        this.apps[name] = app
    }

    registerApps = (apps) => {
        this.apps = {
            ...this.apps,
            ...apps
        }
    }

    existsApp = (name) => {
        name = name.replace(/(\.js)|(\.min\.js)/, '')
        return  !!this.apps[name]
    }

    getApp = (name) => {
        name = name.replace(/(\.js)|(\.min\.js)/, '')
        var app = this.apps[name]

        if(app)
            return app

        if (!app) {
            throw `没有注册这个app. name: ${name}`
        }
        return app
    }

    getApps = () => {
        return this.apps
    }

}

const appFactoryInstance = new appFactory()

export default appFactoryInstance