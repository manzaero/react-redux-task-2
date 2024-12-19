import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

export const useRequestGetTodos = () => {
    const urlTodos = useSelector(state => state.urlTodos)
    const refresh = useSelector(state => state.refresh)
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch(urlTodos);
                const todo = response.json()
                    dispatch({type: 'SET_TODOS', payload: {todos: todo}});
            } catch (e) {
                console.error('Error fetching todos:', e);
            } finally {
                dispatch({type: 'LOAD_STATE'})
            }
        }
        fetchTodos()
    }, [urlTodos, refresh, dispatch])

    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading)

    return {
        todos,
        loading
    }
}