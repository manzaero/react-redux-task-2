export const initialState = {
    refresh: false,
    todos: [],
    loading: true,
    urlTodos: `http://localhost:3000/todos`
}

export const useReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_REFRESH': {
            return {
                ...state,
                refresh: action.payload.refresh
            }
        }
        case 'SET_TODOS': {
            return {
                ...state,
                todos: action.payload.todos
            }
        }
        case 'LOAD-STATE': {
            return {
                ...state,
                loading: false
            }
        }
        default:
            return state
    }
}