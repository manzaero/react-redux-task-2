import styles from "../app.module.css";
import {useSelector} from "react-redux";
import {useRequestSearchTitle} from '../hooks/index.js'

export const Input = () => {
    const searchTitle = useSelector(state => state.searchTitle)
    const {searchHandler, setTodo} = useRequestSearchTitle;
    const newTodo = useSelector(state => state.newTodo)

    return (
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
}