import React from 'react'
import { render as domRender } from 'react-dom'
import { Provider } from 'react-redux'
import appLoader from '@whatsmk/app-loader'
import utils from '@whatsmk/utils'
import metaEngine from '@whatsmk/meta-engine'


//默认配置fetch
utils.fetch.config({
    mock: true
})

appLoader.init({
    defaultComponent: metaEngine.defaultComponent,
    defaultAction: metaEngine.defaultAction,
    defaultReducer: metaEngine.defaultReducer
})

var Hoc
const createElement = React.createElement
const getComponent = metaEngine.componentFactory.getComponent
var isProduction = process.env.isProduction

//初始化MK环境
function init(option) {
    appLoader.init(option)
    metaEngine.componentFactory.registerComponent("AppLoader", appLoader.AppLoader)
}

//配置元数据引擎
function config(option) {
    metaEngine.config(option)
}

//加载app
async function load(app) {
    return await appLoader.loadApp(app, isProduction)
}

//设置高阶组件
function setHoc(hoc) {
    Hoc = hoc
}

async function render(appName, targetDomId) {
    if (!appLoader.existsApp(appName))
        await appLoader.loadApp(appName, isProduction)

    if (Hoc) {
        domRender(
            (
                <Hoc>
                    <Provider store={window.__mk_store__}>
                        <appLoader.AppLoader name={appName} />
                    </Provider>
                </Hoc>
            ),
            document.getElementById(targetDomId)
        )
    }
    else {
        domRender(
            (
                <Provider store={window.__mk_store__}>
                    <appLoader.AppLoader name={appName} />
                </Provider>
            ),
            document.getElementById(targetDomId)
        )
    }
}


export default {
    appLoader,
    utils,
    metaEngine,
    init,
    config,
    load,
    getComponent,
    setHoc,
    createElement,
    render
}

export {
    appLoader,
    utils,
    metaEngine,
    init,
    config,
    load,
    getComponent,
    setHoc,
    createElement,
    render
}
