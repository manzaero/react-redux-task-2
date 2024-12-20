import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export const useRequestSearchTitle = () => {
    const searchTitle = useSelector(state => state.searchTitle)
    const sortState = useSelector(state => state.sortState)
    const debouncedSearchTitle = useSelector(state => state.debouncedSearchTitle)
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    const refresh = useSelector(state => state.refresh)

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch({type: 'SET_DEBOUNCE_SEARCH_TITLE', payload: {debouncedSearchTitle: searchTitle}});
        }, 600)

        return () => clearTimeout(timer)
    }, [searchTitle])

    const searchHandler = (value) => {
        dispatch({type: 'SET_SEARCH_TITLE', payload: {searchTitle: value}})
    }

    const resultFoundTodos = () => {
        if (debouncedSearchTitle.trim() !== '') {
            return todos.filter(todo => todo.title.toLowerCase().includes(debouncedSearchTitle.toLowerCase()))
        } else {
            return todos;
        }
    }

    const sortTodos = () => {
        dispatch({type: 'SET_SORT_STATE', payload: {sortState: !sortState}})
        console.log(sortState)
        dispatch({type: 'SET_REFRESH', payload: {refresh: !refresh}})
    }

    const getSortedTodos = (todosToSort) => {
        if (!sortState) {
            return [...todosToSort].sort((a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0)
        } else {
            return todosToSort;
        }
    }

    const [filteredAndSorted, setFilteredAndSorted] = useState([]);

    useEffect(() => {
        const result = getSortedTodos(resultFoundTodos());
        setFilteredAndSorted(result);
    }, [debouncedSearchTitle, sortState, todos]);


    return {
        searchHandler,
        filteredAndSorted,
        sortTodos,
        sortState,
        searchTitle
    }
}