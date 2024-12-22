import styles from '../../app.module.css';
import {useRequestDeleteTodo, useRequestUpdateTodo} from "../../hooks/index.js";
import PropTypes from "prop-types";

export const TodoItem = ({todo}) => {
    const {updateTodos} = useRequestUpdateTodo();
    const {deleteTodo} = useRequestDeleteTodo();

    return (<div className={styles.flex}>
            <li>{todo.title}</li>
            <button className={styles.btn} onClick={() => updateTodos(todo.id)}>Update</button>
            <button className={styles.btn} onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>)
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
}