class actionFactory {
    constructor() {
        this.actions = {}
    }

    registerAction(name, action) {
        if (this.actions[name]) {
            console.log(`action已经存在. name: ${name}, 忽略`)
        }
        this.actions[name] = action
    }


    registerActions(actions) {
        if (!actions || actions.length == 0)
            return
            actions.forEach(c => this.registerAction(c.name, c.action))
    }

    getAction(name) {
        if (!name)
            throw `action name不能为空`

        var action = this.actions[name]

        if (!action) {
            throw `找不到action,name:${name}`
        }

        return action
    }

}

const instance = new actionFactory()

export default instance