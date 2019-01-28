import * as types from './ActionTypes';

export default function chatReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.messages
      };
    case types.LOAD_MESSAGES_FAIL:
    default:
      return state;
  }
}
