import http from '@/api/http'

export default {
    async set_regions({commit}) {
        let response = await http.get('region')
        let result = await response.data
        commit('set_allRegion',result.data)
        console.log(111)
    }
}

