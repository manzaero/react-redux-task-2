import {useDispatch, useSelector} from "react-redux";

export const useRequestDeleteTodo = () => {
    const urlTodos = useSelector(state => state.urlTodos);
    const refresh = useSelector(state => state.refresh);
    const dispatch = useDispatch();

    const deleteTodo = (id) => {
        fetch(`${urlTodos}/${id}`, {
            method: 'DELETE'
        })
            .then(todo => todo.json())
            .then(todo => {
                console.log(todo)
                dispatch({type: 'SET_REFRESH', payload: {refresh: !refresh}})
            })
            .catch(err => {
                console.error('Error:', err)
            })
    }
    return {
        deleteTodo
    }
}