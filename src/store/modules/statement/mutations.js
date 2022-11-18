export default {
    set_allStatement(state, payload){
        state.statements = payload
    },

    add_statement(state,payload) {
        state.statements.push(payload)
    }
}