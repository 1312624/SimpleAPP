import memberReducers from '../Reducers/memberReducers';
import awardReducers from '../Reducers/awardReducers';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    memberReducers,
    awardReducers
});

export default rootReducers;