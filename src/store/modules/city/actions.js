import http from '@/api/http'

export default {
    async set_cities({commit}) {
        let response = await http.get('city')
        let result = await response.data
        commit('set_allCity',result.data)
        console.log(111)
    }
}

