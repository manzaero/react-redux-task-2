import {Buttons} from "./Buttons.jsx";
import PropTypes from "prop-types";

export const ActionButtons = ({addTodo, newTodo, sortTodos, sortState, todos}) => {
    const btnAction = [
        {
            id:1,
            text:'Add todo',
            onClick:() => addTodo(newTodo),
            disabled:!newTodo.trim(),
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
ActionButtons.propTypes = {
    addTodo: PropTypes.func.isRequired,
    newTodo: PropTypes.string.isRequired,
    sortTodos: PropTypes.func.isRequired,
    sortState: PropTypes.bool.isRequired,
    todos: PropTypes.array.isRequired,
}