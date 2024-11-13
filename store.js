
import { createStore } from 'redux';
import CounterReducer from './reducer';
import CounterPage from "../pages/CounterPage";

const store = createStore(CounterReducer);

export default store;
