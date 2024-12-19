import styles from '../../app.module.css';
import PropTypes from "prop-types";
import {useContext} from "react";
import {AppContext} from "../../context.js";

export const TodoItem = ({todo}) => {
    const {updateTodos, deleteTodo} = useContext(AppContext)

    return (<div className={styles.flex}>
            <li>{todo.title}</li>
            <button className={styles.btn} onClick={() => updateTodos(todo.id)}>Update</button>
            <button className={styles.btn} onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>)
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
}