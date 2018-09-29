# MK

## Installation

```
sudo npm i -g @whatsmk/cli
```

## Getting Started

创建一个应用,并且运行起来

```
mk app test
cd test
yarn start
```

## Core Concepts

### App

应用没有明显的边界，根据开发人员需要完成的一个任务、或一项工作、或一个页面，将自由定义
应用主要有4个属性，name、state、action、view
每个应用，麻雀虽小五脏俱全，可独立运行
应用之间可以相互组合

### State

```
const state = {
    data: {
        content: 'hello ',
        input: ''
    }
}
```

状态很简单，就是应用的数据存储器
引擎内部状态的存储机构是immutable
每次状态变化会通知view,重新render


### Action

```
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
```

action是一个class，内部方法可以被View事件调用
actionMixin默认混入了mk引擎提供的base行为,包含
    base.getState || base.gs,用于获取状态
    base.setState || base.ss，用与设置状态
可以自己定义Action混入，查看后面高级说明


### View

```
const view = {
    component: 'div',
    className: 'hello',
    children: [{
        component: 'div',
        children: '{{data.content + data.input}}'
    }, {
        component: 'input',
        placeholder: 'world',
        value: '{{data.input}}',
        onChange: '{{$onChange}}'
    }]
}
```

view是界面元数据，json化表现
每个节点包含引擎级别属性
    component: 组件名，可用所有html原生组件，自定义
    _visible: 是否render
    _power: (rowIndex)=> rowIndex or for in data.list ?

所有属性值支持表达式
    {{data.content}}
    {{$onChange}}
    {{(e)=>$base.ss('data.input', e.target.value)}}
    {{{debugger;return $onChange}}}


## 高级

### load App

支持显式加载和隐式加载

显式：
```
//index.html

<script>
      window.main = function (mk) {
          mk.load(['app-test']).then(()=>{
            mk.render('hello', 'app'); 
          })
            
    }
</script>
```

隐式：

//index.js

const view = {
    component: 'div',
    className: 'hello',
    children: [{
        component: 'AppLoader',
        appName: 'app-test' 
    }]
}


### 如何调用后台接口

```
import {fetch} from 'mk'

fetch.post('/v1/login',{user:'user', pwd: '11'})
```


### 如何自定义组件

```
import {regisiterComponent} from 'mk'

var CustomCom = function (props){ return (<div>{props.content}</div>) }
regisiterComponent('CustomCom',CustomCom)

const view = {
    component: 'CustomCom',
    content: 'this is custom component'
}
```

### 如何自定义Action
```
import {registerAction} from 'mk'

class CustomAction {
    customFun = () => alter()
}

registerAction('CustomAction', CustomAction)

@actionMixin('base','CustomAction')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}

const view = {
    component: 'button',
    content: 'custom action test',
    onClick: '{{@CustomAction.customFun}}'
}

```

### 如何自定义模板组件

```
import {registerTemplate} from 'mk'

const CustomTemplate = function(props){
    return {
        component: 'div',
        children: props.content
    }
}

registerTemplate('CustomTemplate', CustomTemplate)

const view = {
    component: 'CustomTemplate',
    content: 'custom template'
}
```

## 打包

```
mk build 
mk build --dev
mk pkg
mk pkg --dev

```

## 发布

```
mk publish
```

## 引用
```
mk add <appName>
```

## Hub



## Application Structure

index.html
index.js
style.less
package.json
README.md
.gitignore
.npmignore

## What is MK?



