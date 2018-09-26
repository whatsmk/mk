import pkgJson from './package.json'
import { actionMixin } from 'mk-meta-engine'
import './style.less'

const name = pkgJson.name

const state = {
    data: {
        content: 'hello',
        input: ''
    }
}

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onChange = (e) => {
        this.base.setState({ 'data.input': e.target.value })
        console.log(this.base.getState('data.input'))
    }
}

const view = {
    component: 'div',
    className: '<appName>',
    children: [{
        component: 'div',
        children: '{{data.content + data.input}}'
    }, {
        component: 'input',
        palceholder: 'world',
        value: '{{data.input}}',
        onChange: '{{$onChange}}'
    }]
}

export {
    name,
    state,
    action,
    view
}