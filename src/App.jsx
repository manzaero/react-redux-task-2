import styles from './app.module.css'
import {Header} from "./components/Header.jsx";
import {Input} from "./components/Input.jsx";
import {TodoList} from "./components/todos/TodoList.jsx";
import {ActionButtons} from './components/buttons/ActionButtons.jsx'
import {useRequestGetTodos} from "./hooks/index.js";
import {useSelector} from "react-redux";
import {useFilteredAndSorted} from "./selectors/index.js";


export const App = function () {

    const { loading } = useRequestGetTodos();
    const filteredAndSorted = useSelector(useFilteredAndSorted)

    return (<>
        <div className={styles.container}>
            <Header/>
            <Input
            />
            {loading ? <div className={styles.loader}></div> : filteredAndSorted.length === 0 ?
                <div className={styles.wrong}>Todos not found</div> : (
                    <TodoList filteredAndSorted={filteredAndSorted}/>)}
            <ActionButtons/>
        </div>
    </>)
}

