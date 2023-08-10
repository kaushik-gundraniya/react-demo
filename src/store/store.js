// store.js
import { createStore } from 'redux';
import rootReducer from '../reducer/taskReducer';

const store = createStore(rootReducer);

export default store;
