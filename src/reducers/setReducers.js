export const initialState = {
    newTodo: '',
    refresh: false,
    urlTodos: 'http://localhost:3000/todos',
    sortState: false,
    searchTitle: '',
    debouncedSearchTitle: '',
    filteredAndSorted: []
}

export const setReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTERED_AND_SORTED': {
            return {
                ...state,
                filteredAndSorted: action.payload.filteredAndSorted,
            }
        }
        case 'SET_REFRESH': {
            return {
                ...state,
                refresh: action.payload.refresh
            }
        }
        case 'SET_TODO': {
            return {
                ...state,
                newTodo: String(action.payload.newTodo || '')
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
                sortState: action.payload.sortState
            }
        }
        default:
            return state
    }
}