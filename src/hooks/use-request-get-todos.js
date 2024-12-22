import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLoading, useRefresh, useTodos, useUrlTodos} from "../selectors/index.js";
import {getTodosAction} from "../action/index.js";

export const useRequestGetTodos = () => {
    const urlTodos = useSelector(useUrlTodos)
    const refresh = useSelector(useRefresh)
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch(urlTodos);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const contentType = response.headers.get('Content-Type');
                if (!contentType || !contentType.includes('application/json')) {
                    throw new Error('Response is not JSON');
                }

                const todo = await response.json();
                dispatch(getTodosAction(todo));

            } catch (e) {
                console.error('Error fetching todos:', e.message);
            } finally {
                dispatch({ type: 'LOAD_STATE' });
            }
        };

        fetchTodos()
    }, [urlTodos, refresh, dispatch])

    const todos = useSelector(useTodos);
    const loading = useSelector(useLoading)

    return {
        todos,
        loading
    }
}