const mainReducer =(state=[],action)=> {
    if (action.type==='ADD_INPUT'){
        return state=[...state,action.input]
    }
    if (action.type==='REMOVE_INPUT'){
        return state.filter(el=>el.id!==action.id)
    }
    return state
}
export default mainReducer