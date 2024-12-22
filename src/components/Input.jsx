import styles from "../app.module.css";
import {useSelector} from "react-redux";
import {useRequestAddTodo, useRequestSearchTitle} from '../hooks/index.js'
import {useNewTodo, useSearchTitle} from "../selectors/index.js";

export const Input = () => {
    const searchTitle = useSelector(useSearchTitle)
    const newTodo = useSelector(useNewTodo)
    const {searchHandler} = useRequestSearchTitle();
    const {setTodo} = useRequestAddTodo()


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