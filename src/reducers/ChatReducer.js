import * as types from '../actions/ActionTypes';

export default function chatReducer(state= [], action){
  switch (action.type) {
    case types.LOAD_MESSAGES_SUCCESS:
      return action.messages;
    default:
      return state;
  }
}