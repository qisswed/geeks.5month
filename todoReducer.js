import {types} from "../types";

const initialState = {
    todos: [
        { id: 1, text: 'Task 1', completed: false, filter: 'all' },
        { id: 2, text: 'Task 2', completed: true, filter: 'completed' },
        { id: 3, text: 'Task 3', completed: false, filter: 'active' },
        { id: 4, text: 'Task 4', completed: true, filter: 'completed' },
        { id: 5, text: 'Task 5', completed: false, filter: 'active' },
    ],
    filter: 'all'
}

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {id: Date.now(), text: action.payload, completed: false}
                ]
            }
        case types.TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
                ),
            }
        case types.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }

        case types.SET_FILTER:
            return { ...state, filter: action.payload };
        case types.RESET_FILTER:
            return { ...state, filter: 'all' };
        default:
            return state
    }
}



