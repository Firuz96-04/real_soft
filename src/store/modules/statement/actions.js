// import http from '../../../api/http'
import http from '@/api/http'
export default {
    async set_statements({commit}) {
        let response = await http.get('statement')
        let result = await response.data
        commit('set_allStatement',result.data)
        console.log(111)
    },

    async add_statement({commit},payload) {
        try {
            let response = await http.post('statement',payload.obj, {
                headers: {
                    "Content-Type": "multipart/form-data"
                  },
            })
            let result = await response.data
            commit('add_statement',result.data)
            payload.cb()      
        } catch (error) {
                console.log(error)
        }
     
    }
}

