import pkgJson from './package.json'
import { actionMixin, componentFactory } from 'mk-meta-engine'
import * as components from './component'
import './style.less'

const name = pkgJson.name

//Registration component
componentFactory.registerComponent('antd', components)

const state = { data: {} }

@actionMixin('base')
class action { }

const view = {
    component: 'div',
    _visible: 'false'
}

export {
    name,
    state,
    action,
    view
}