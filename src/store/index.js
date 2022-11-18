import {createStore} from 'vuex'
import statement from './modules/statement'
import city from './modules/city'
import region from './modules/region'
import type_study from './modules/type_study'
const store = createStore({
    modules: {
        statement,
        city,
        region,
        type_study

    }
})


export default store