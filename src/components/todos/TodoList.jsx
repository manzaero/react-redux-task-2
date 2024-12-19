import {TodoItem} from "./TodoItem.jsx";
import PropTypes from "prop-types";

export const TodoList = ({filteredAndSorted = []}) => {

    return (
        <ul>
            {
                filteredAndSorted.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                    />
                ))
            }
        </ul>
    )
}
TodoList.propTypes = {
    filteredAndSorted: PropTypes.array.isRequired,
}