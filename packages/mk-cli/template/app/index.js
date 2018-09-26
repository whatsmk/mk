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

    //called once on initialization
    onInit = () => {
        console.log('init')
    }

    onChanged = (e) => {
        //this.base.sf or this.base.sfs, set the field value of state and rerender
        this.base.sfs({
            'data.input': e.target.value,
            'data.content': 'hello ' + e.target.value
        })
    }

    submit = () => {
        //this.base.gf get the field value of state
        alert(this.base.gf('data.content'))
    }
}

const view = {
    component: 'div',
    className: 'a3',
    children: [{
        component: 'div',  //all native HTML elements can be used
        children: `{{data.content}}` //bind the path of state {{path}}
    }, {
        component: 'input',
        palceholder: 'world',
        value: `{{data.input}}`,
        onChange: `{{$onChanged}}` //bind the method of action {{$method}}
    }, {
        component: 'button',
        children: 'submit',
        onClick: '{{$submit}}' 
    }]
}

export {
    name,
    state,
    action,
    view
}