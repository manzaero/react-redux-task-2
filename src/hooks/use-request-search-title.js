import {useEffect, useState} from "react";

export const useRequestSearchTitle = ( todos, setRefresh, refresh ) => {
    const [sortState, setSortState] = useState(false)
    const [searchTitle, setSearchTitle] = useState('')
    const [debouncedSearchTitle, setDebouncedSearchTitle] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchTitle(searchTitle)
        }, 600)

        return () => clearTimeout(timer)
    }, [searchTitle])

    const searchHandler = (value) => {
        setSearchTitle(value)
    }

    const resultFoundTodos = () => {
        if (debouncedSearchTitle.trim() !== '') {
            return todos.filter(todo => todo.title.toLowerCase().includes(debouncedSearchTitle.toLowerCase()))
        } else {
            return todos;
        }
    }

    const sortTodos = () => {
        setSortState(sortState => !sortState);
        console.log(sortState)
        setRefresh(!refresh)
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