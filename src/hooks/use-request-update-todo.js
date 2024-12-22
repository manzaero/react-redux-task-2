import {useDispatch, useSelector} from "react-redux";
import {useRefresh, useUrlTodos} from "../selectors/index.js";
import {setRefresh} from "../action/set-refresh.js";

export const useRequestUpdateTodo = () => {
    const  urlTodos = useSelector(useUrlTodos);
    const refresh = useSelector(useRefresh);
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
                dispatch(setRefresh(!refresh));
            })
            .catch(err => {
                console.error('Error:', err)
            })
    }
    return {
        updateTodos,
    }
}