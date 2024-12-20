export const initialState = {
    newTodo: '',
    refresh: false,
    todos: [],
    loading: true,
    urlTodos: `http://localhost:3000/todos`,
    sortState: false,
    searchTitle: '',
    debouncedSearchTitle: ''
}

export const useReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_REFRESH': {
            return {
                ...state,
                refresh: action.payload.refresh
            }
        }
        case 'GET_TODOS': {
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
        case 'SET_TODO': {
            return {
                ...state,
                newTodo: action.payload.newTodo
            }
        }
        case 'SET_DEBOUNCE_SEARCH_TITLE': {
            return {
                ...state,
                debouncedSearchTitle: action.payload.debouncedSearchTitle
            }
        }
        case 'SET_SEARCH_TITLE': {
            return {
                ...state,
                searchTitle: action.payload.searchTitle
            }
        }
        case 'SET_SORT_STATE': {
            return {
                ...state,
                sortSTate: action.state.sortState
            }
        }
        default:
            return state
    }
}