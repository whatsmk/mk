import pkgJson from './package.json'
import { actionMixin } from 'mk-meta-engine'
import './style.less'

const name = pkgJson.name

const state = {
    data: {
        content: 'hello'
    }
}

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    //初始化时调用一次
    onInit = () => {
        console.log('init')
    }

    onChanged = (e) => {
        //this.base.sf 或 this.base.sfs设置状态，每次设置都会重新render
        this.base.sfs({
            'data.input': e.target.value,
            'data.content': 'hello ' + e.target.value
        })
    }

    alert = () => {
        //this.base.gf 获取状态
        alert(this.base.gf('data.content'))
    }
}

const view = {
    component: 'div',
    className: 'a3',
    children: [{
        component: 'div',  //可以使用所有原生html元素
        children: `{{data.content}}` //可以绑定state的路径，{{表达式}}
    }, {
        component: 'input',
        value: `{{data.input}}`,
        onChange: `{{$onChanged}}` //可以调用action中的方法，{{$方法名}}
    }, {
        component: 'button',
        children: 'alert',
        onClick: '{{$alert}}' 
    }]
}

export {
    name,
    state,
    action,
    view
}