
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CounterPage from './pages/CounterPage'

const App = () => (
    <Provider store={store}>
        <CounterPage/>
    </Provider>
);

export default App;
