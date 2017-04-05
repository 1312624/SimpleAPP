import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../Reducers/rootReducers';
import thunk from 'redux-thunk';

export default function configureStore() {
    return createStore(rootReducers, applyMiddleware(thunk));
}
