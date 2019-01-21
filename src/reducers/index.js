import { combineReducers } from 'redux';
import chatReducer from "../chat/ChatReducer";

const rootReducer = combineReducers({
  chatReducer
});

export default rootReducer;
