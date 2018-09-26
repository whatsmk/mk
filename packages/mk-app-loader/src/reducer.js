import { Map } from 'immutable'
import wrapMapStateToProps from './wrapMapStateToProps'
import wrapMapDispatchToProps from './wrapMapDispatchToProps'
import createReduxConnector from './createReduxConnector'
import config from './config'

export default function (state = Map(), {
    type,
    payload
}) {
    switch (type) {
        case "@@loadAppReal":
            return loadApp(state, payload)
        case "@@reduce":
            return reduce(state, payload)
        case "@@clearAppState":
            return clearAppState(state, payload)
        default:
            return state
    }
}

function loadApp(state, {
    fullName,
    prevFullName,
    appInfo,
    component,
    action,
    reducer
}) {
    if (!state.has(fullName)) {
        state = state.set(fullName, Map())

        const actionInstance = typeof action == 'function' ? action({ appInfo, fullName }) : config.current.defaultAction({appInfo, fullName}),
            reducerInstance = typeof reducer == 'function' ? reducer({ appInfo, fullName }) : config.current.defaultReducer({appInfo, fullName}),
            container = createReduxConnector(
                component || config.current.defaultComponent,
                wrapMapStateToProps(fullName),
                wrapMapDispatchToProps(fullName, actionInstance, reducerInstance),
                null, { withRef: true, pure: true }
            )

        state = state.setIn([fullName, '@@require'], Map({
            fullName,
            appInfo,
            component,
            action: actionInstance,
            reducer: reducerInstance,
            container
        }))
    }

    if (prevFullName && prevFullName != fullName) {
        state = clearAppState(state, { fullName: prevFullName })
    }

    return state
}

function clearAppState(state, {
    fullName
}) {

    if (!state.has(fullName))
        return state

    const ks = []
    state.get(fullName).mapKeys(k => {
        if (k != '@@require')
            ks.push(k)
        return k
    })

    ks.forEach(k => {
        if (k)
            state = state.update(fullName, x => x.remove(k))
    })

    return state
}


function reduce(state, {
    reducer,
    type,
    payload,
    fullName,
    injectFunsForReducer
}) {

    var startDate = new Date()
    var oldState = state.get(fullName)
    var newState = reducer[type].apply(this, [oldState].concat(payload))

    if (typeof newState === "function") {
        newState = newState(injectFunsForReducer)
    }

    if (window.__mk_record_action__ === true) {
        window.__mk_actions__ = window.__mk_actions__ || []
        var endDate = new Date()
        window.__mk_actions__.unshift({
            appFullName: fullName,
            reduceMethod: type,
            payload,
            oldState,
            newState,
            startTime: startDate.getHours() + ':' + startDate.getMinutes() + ':' + startDate.getSeconds() + '.' + startDate.getMilliseconds(),
            endTime: endDate.getHours() + ':' + endDate.getMinutes() + ':' + endDate.getSeconds() + '.' + endDate.getMilliseconds(),
            elapsedTime: Math.abs((startDate.getTime() - endDate.getTime()))//(1000*60*60*24)
        })
    } else {
        if (window.__mk_actions__)
            window.__mk_actions__ = undefined
    }

    return state.set(fullName, newState)
}