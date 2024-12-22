import {TodoItem} from "./TodoItem.jsx";
import {useSelector} from "react-redux";
import {useFilteredAndSorted} from "../../selectors/index.js";

export const TodoList = () => {
    const filteredAndSorted = useSelector(useFilteredAndSorted);
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