import {Buttons} from "./Buttons.jsx";
import {useRequestAddTodo, useRequestSearchTitle} from "../../hooks/index.js";
import {useSelector} from "react-redux";
import {useNewTodo, useSortState, useTodos} from '../../selectors/index.js'

export const ActionButtons = () => {
    const {addTodo} = useRequestAddTodo()
    const {sortTodos} = useRequestSearchTitle()
    const newTodo = useSelector(useNewTodo)
    const sortState = useSelector(useSortState)
    const todos = useSelector(useTodos)

    const btnAction = [
        {
            id:1,
            text:'Add todo',
            onClick:() => addTodo(newTodo),
            disabled:typeof newTodo !== 'string' || !newTodo.trim(),
        },{
            id:2,
            text:`${!sortState ? 'Sort' : 'Return'}`,
            onClick:() => sortTodos(),
            disabled:todos.length === 0,
        },
    ]
    return (
        <>
            {
                btnAction.map((btn) => (
                    <Buttons
                        key={btn.id}
                        onClick={btn.onClick}
                        disabled={btn.disabled}
                    >{btn.text}
                    </Buttons>
                ))}
        </>
    )
}