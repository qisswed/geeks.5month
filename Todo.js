import React, { useState } from "react";
import { useDispatch,} from "react-redux";
import { addTodo, setFilter, resetFilter } from "../../redux/actions";
import TodoList from "./TodoList";

const Todo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const handleAddTodo = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            {/* Фильтры */}
            <div>
                <button
                    onClick={() => dispatch(setFilter('all'))}
                >
                    Все задания
                </button>
                <button
                    onClick={() => dispatch(setFilter('active'))}
                >
                    Активные задания
                </button>
                <button
                    onClick={() => dispatch(setFilter('completed'))}
                >
                    Завершенные задания
                </button>
                <button onClick={() => dispatch(resetFilter())}>Сбросить фильтр</button>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Enter a new task"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <button onClick={handleAddTodo}>Add task</button>
            </div>
            <TodoList />
        </div>
    );
};

export default Todo;