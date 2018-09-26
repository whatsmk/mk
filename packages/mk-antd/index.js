import pkgJson from './package.json'
import { actionMixin, componentFactory } from 'mk-meta-engine'
import * as components from './component'
import './style.less'

const name = pkgJson.name

//注册组件
componentFactory.registerComponent('antd', components)

const state = { data: {} }

@actionMixin('base')
class action { }

const meta = {
    component: 'div',
    _visible: 'false'
}

export default {
    name,
    state,
    action,
    view
}