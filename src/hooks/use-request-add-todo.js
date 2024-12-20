import {useDispatch, useSelector} from "react-redux";

export const useRequestAddTodo = () => {
    const newTodo = useSelector(state => state.newTodo)
    const urlTodos = useSelector(state => state.urlTodos)
    const dispatch = useDispatch()
    const refresh = useSelector(state => state.refresh)
    const setTodo = (value) => {
        dispatch({type: 'SET_TODO', payload: {newTodo: value}});
    }
    const addTodo = () => {
        if  (!newTodo.trim()) return
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
                dispatch({type: 'SET_REFRESH', payload: {refresh: !refresh}});
                dispatch({type: 'SET_TODO', payload: {newTodo: ''}});
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