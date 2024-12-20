import styles from './app.module.css'
import {Header} from "./components/Header.jsx";
import {Input} from "./components/Input.jsx";
import {TodoList} from "./components/todos/TodoList.jsx";
import {ActionButtons} from './components/buttons/ActionButtons.jsx'
import {AppContext} from "./context.js";
import {useSelector} from "react-redux";


export const App = function () {

    const loading = useSelector(state => state.loading);

    return (<>
        <div className={styles.container}>
            <Header/>
            <Input
            />
            {loading ? <div className={styles.loader}></div> : filteredAndSorted.length === 0 ?
                <div className={styles.wrong}>Todos not found</div> : (
                    <AppContext.Provider value={{ deleteTodo, updateTodos }}>
                        <TodoList filteredAndSorted={filteredAndSorted}/>
                    </AppContext.Provider>
                )}
            <ActionButtons/>
        </div>
    </>)
}

