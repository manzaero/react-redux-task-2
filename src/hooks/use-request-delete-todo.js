import {useDispatch, useSelector} from "react-redux";
import {useRefresh, useUrlTodos} from "../selectors/index.js";
import {setRefresh} from "../action/index.js";

export const useRequestDeleteTodo = () => {
    const urlTodos = useSelector(useUrlTodos);
    const refresh = useSelector(useRefresh);
    const dispatch = useDispatch();

    const deleteTodo = (id) => {
        fetch(`${urlTodos}/${id}`, {
            method: 'DELETE'
        })
            .then(todo => todo.json())
            .then(todo => {
                console.log(todo)
                dispatch(setRefresh(!refresh))
            })
            .catch(err => {
                console.error('Error:', err)
            })
    }
    return {
        deleteTodo
    }
}