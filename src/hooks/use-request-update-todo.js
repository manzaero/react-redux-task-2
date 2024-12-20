import {useDispatch, useSelector} from "react-redux";

export const useRequestUpdateTodo = () => {
    const  urlTodos = useSelector(state => state.urlTodos);
    const refresh = useSelector(state => state.refresh);
    const dispatch = useDispatch();

    const updateTodos = (id) => {
        fetch(`${urlTodos}/${id}`, {
            method: 'PUT', headers: {'Content-type': 'application/json'}, body: JSON.stringify({
                "title": "updated"
            })
        })
            .then(todo => todo.json())
            .then(todo => {
                console.log(todo)
                dispatch({type: 'SET_REFRESH', payload:{refresh: !refresh}});
            })
            .catch(err => {
                console.error('Error:', err)
            })
    }
    return {
        updateTodos,
    }
}