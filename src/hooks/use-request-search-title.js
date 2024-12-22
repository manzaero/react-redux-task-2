import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useDebouncedSearchTitle, useRefresh, useSearchTitle, useSortState, useTodos} from "../selectors/index.js";
import {setFilteredAndSortedAction, setRefresh, setSortStateAction, searchTitleAction, setDebounceSearchTitle} from "../action/index.js";

export const useRequestSearchTitle = () => {
    const searchTitle = useSelector(useSearchTitle)
    const sortState = useSelector(useSortState)
    const debouncedSearchTitle = useSelector(useDebouncedSearchTitle)
    const todos = useSelector(useTodos)
    const refresh = useSelector(useRefresh)
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setDebounceSearchTitle(searchTitle));
        }, 600)

        return () => clearTimeout(timer)
    }, [searchTitle])

    const searchHandler = (value) => {
        dispatch(searchTitleAction(value))
    }

    const resultFoundTodos = () => {
        const todosExam = Array.isArray(todos) ? todos : [];
        if (debouncedSearchTitle?.trim() !== '') {
            return todosExam.filter(todo => todo.title.toLowerCase().includes(debouncedSearchTitle.toLowerCase()))
        } else {
            return todosExam;
        }
    }

    const sortTodos = () => {
        dispatch(setSortStateAction(!sortState))
        dispatch(setRefresh(!refresh))
    }

    const getSortedTodos = (todosToSort) => {
        if (!sortState) {
            return [...todosToSort].sort((a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0)
        } else {
            return todosToSort;
        }
    }


    useEffect(() => {
        const result = getSortedTodos(resultFoundTodos());
        dispatch(setFilteredAndSortedAction(result));
    }, [debouncedSearchTitle, sortState, todos]);


    return {
        searchHandler,
        sortTodos,
        sortState,
        searchTitle
    }
}