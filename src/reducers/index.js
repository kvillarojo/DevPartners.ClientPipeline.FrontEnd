import { combineReducers } from 'redux';
// import dogReducer from './dogReducer';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer'
import companyReducer from './companyReducer'
import entityReducer from './entityReducer'
// import rootApplicationReducer from './rootApplicationReducer';

const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    companyReducer,
    entityReducer
    // rootApplicationReducer,
});

export default rootReducer;
