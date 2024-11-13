
const initialState = 0;

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return Math.max(0, state - action.payload); // Ограничение до 0
        case 'RESET':
            return 0;
        default:
            return state;
    }
};

export default CounterReducer;
