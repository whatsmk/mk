import config from './config'

class appFactory {
    constructor() {
        this.apps = {}
        window.__mk_apps__ = this.apps
    }

    registerApp = (name, app) => {
        if (this.apps[name]) {
            console.log(`Already registered this app，name: ${name},please ignore`)
            return
        }

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
        return !!this.apps[name]
    }

    getApp = (name) => {
        name = name.replace(/(\.js)|(\.min\.js)/, '')
        var app = this.apps[name]

        if (app)
            return app

        if (!app) {
            throw `unregistered this app. name: ${name}`
        }
        return app
    }

    getApps = () => {
        return this.apps
    }

}

const appFactoryInstance = new appFactory()

export default appFactoryInstance