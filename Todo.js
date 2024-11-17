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
            <div>
                <button
                    onClick={() => dispatch(setFilter('all'))}
                >
                    1.Все задания
                </button>
                <p>         </p>
                <button
                    onClick={() => dispatch(setFilter('active'))}
                >
                    2.Активные задания
                </button>
                <p>         </p>

                <button
                    onClick={() => dispatch(setFilter('completed'))}
                >
                    3.Завершенные задания
                </button>
                <p>          </p>

                <button onClick={() => dispatch(resetFilter())}>
                    4.Сбросить фильтр
                </button>
                <p>          </p>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Enter a new task"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <button onClick={() => handleAddTodo('all')}>    Добавить в 'Все задания'</button>
                <button onClick={() => handleAddTodo('active')}>     Добавить в 'Активные задания'</button>
                <button onClick={() => handleAddTodo('completed')}>     Добавить в 'Завершенные задания'</button>
                <button onClick={handleAddTodo}>Add task</button>
            </div>
            <TodoList/>
        </div>
    );
};

export default Todo;