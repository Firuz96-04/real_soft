import http from '@/api/http'

export default {
    async set_type_studies({commit}) {
        let response = await http.get('type-study')
        let result = await response.data
        commit('set_alltype_studies',result.data)
    }
}

