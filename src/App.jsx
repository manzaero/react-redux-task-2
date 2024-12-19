import styles from './app.module.css'
import { useState } from "react";
import {
    useRequestAddTodo,
    useRequestGetTodos,
    useRequestDeleteTodo,
    useRequestUpdateTodo,
    useRequestSearchTitle
} from "./hooks/index.js";
import {Header} from "./components/Header.jsx";
import {Input} from "./components/Input.jsx";
import {TodoList} from "./components/todos/TodoList.jsx";
import {ActionButtons} from './components/buttons/ActionButtons.jsx'
import {AppContext} from "./context.js";


const urlTodos = `http://localhost:3000/todos`

export const App = function () {
    const [refresh, setRefresh] = useState(false)
    const [todos, setTodos] = useState([])

    const {searchHandler, filteredAndSorted, searchTitle, sortState, sortTodos} = useRequestSearchTitle( todos, setRefresh, refresh )
    const {addTodo, newTodo, setTodo} = useRequestAddTodo(urlTodos, setRefresh, refresh)
    const { loading} = useRequestGetTodos(todos, setTodos, urlTodos, refresh);
    const { deleteTodo } = useRequestDeleteTodo( urlTodos, setRefresh, refresh);
    const { updateTodos } = useRequestUpdateTodo(urlTodos, setRefresh, refresh);

    return (<>
        <div className={styles.container}>
            <Header/>
            <Input
                searchTitle={searchTitle}
                searchHandler={searchHandler}
                newTodo={newTodo}
                setTodo={setTodo}
            />
            {loading ? <div className={styles.loader}></div> : filteredAndSorted.length === 0 ?
                <div className={styles.wrong}>Todos not found</div> : (
                    <AppContext.Provider value={{ deleteTodo, updateTodos }}>
                        <TodoList filteredAndSorted={filteredAndSorted}/>
                    </AppContext.Provider>
                )}
            <ActionButtons addTodo={addTodo} newTodo={newTodo} sortState={sortState} sortTodos={sortTodos} todos={todos}/>
        </div>
    </>)
}

