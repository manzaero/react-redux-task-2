import {useDispatch, useSelector} from "react-redux";
import {useNewTodo, useRefresh, useUrlTodos} from "../selectors/index.js";
import {setRefresh, setTodoAction} from "../action/index.js";

export const useRequestAddTodo = () => {
    const newTodo = useSelector(useNewTodo)
    const urlTodos = useSelector(useUrlTodos)
    const refresh = useSelector(useRefresh)
    const dispatch = useDispatch()

    const setTodo = (value) => {
        dispatch(setTodoAction(value));
    }
    const addTodo = () => {
        if (typeof newTodo !== 'string' || !newTodo.trim()) return;
        fetch(urlTodos, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                "title": newTodo,
            })
        })
            .then(todo => todo.json())
            .then(todo => {
                console.log(todo);
                dispatch(setRefresh(!refresh));
                dispatch(setTodoAction(''));
            })
            .catch(err => {
                console.error('Error:', err)
            })
    }
    return {
        addTodo,
        newTodo,
        setTodo
    }
}