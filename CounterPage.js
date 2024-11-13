import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CounterPage = () => {
    const count = useSelector((state) => state); 
    const dispatch = useDispatch();

    const handleIncrement = (value) => {
        dispatch({ type: 'INCREMENT', payload: value });
    };

    const handleDecrement = (value) => {
        dispatch({ type: 'DECREMENT', payload: value });
    };

    const handleReset = () => {
        dispatch({ type: 'RESET' });
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => handleIncrement(1)}>+1</button>
            <button onClick={() => handleDecrement(1)}>-1</button>
            <button onClick={() => handleIncrement(10)}>+10</button>
            <button onClick={() => handleDecrement(10)}>-10</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default CounterPage;
