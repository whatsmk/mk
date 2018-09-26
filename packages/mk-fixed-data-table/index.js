import pkgJson from './package.json'
import { actionMixin, componentFactory } from 'mk-meta-engine'
import './style.less'
import FixedDataTable from 'fixed-data-table-2'

const name = pkgJson.name

//注册组件
componentFactory.registerComponent('FixedDataTable', FixedDataTable)

const view = { name: 'root', component: 'div', _visible: 'false' }

const state = { data: {} }

@actionMixin('base')
class action { }

export {
    name,
    state,
    action,
    view
}