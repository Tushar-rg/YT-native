const initialState = true

export const themeReducer = (state = initialState, action)=>{
    if(action.type == 'toggleTheme')
        return action.payload
    return state
}