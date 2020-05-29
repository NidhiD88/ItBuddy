import { createStore, combineReducers } from 'redux';
import loginReducer from '../../components/login/reducer/';

const rootReducer = combineReducers(
{ loginReducer: loginReducer }
);
const configureStore = () => {
return createStore(rootReducer);
}
export default configureStore;