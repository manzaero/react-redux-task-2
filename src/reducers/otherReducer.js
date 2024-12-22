export const initialState = {
    todos: [],
    loading: true,
}

export const otherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TODOS': {
            return {
                ...state,
                todos: action.payload.todos,
                loading: false
            }
        }
        case 'LOAD-STATE': {
            return {
                ...state,
                loading: false
            }
        }
        default: {
            return state
        }
    }
}