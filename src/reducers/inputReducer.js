const inputReducer = (state='',action) => {
    if (action.type==='SET_INPUT'){
        return action.value
    }
    return state
}

export default inputReducer