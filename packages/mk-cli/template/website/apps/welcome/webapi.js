import { fetch } from 'mk-utils'
import config from './config'

const api = key => config.current.webapiMap[key]

export default {
    /*login : (option) => {
        return fetch.post( api('login'),option)
    }*/
}