import styles from "../app.module.css";
import PropTypes from "prop-types";

export const Input = ({ searchTitle, searchHandler, newTodo, setTodo }) => (
        <>
            <input type="text"
                   placeholder="Search..."
                   className={styles.searchInput}
                   value={searchTitle}
                   onChange={(e) => searchHandler(e.target.value)}
            />
            <input type="text"
                   className={styles.addTodo}
                   placeholder="Add Todo"
                   value={newTodo}
                   onChange={(e) => setTodo(e.target.value)}
            />
        </>
)
Input.propTypes = {
    searchTitle: PropTypes.string,
    searchHandler: PropTypes.func,
    newTodo: PropTypes.string,
    setTodo: PropTypes.func,
}