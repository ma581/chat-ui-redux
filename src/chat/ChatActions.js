import ChatService from "./ChatService";
import * as types from '../common/ActionTypes';

export function loadMessages() {
  return function (dispatch) {
    return ChatService.getAllMessages()
      .then(messages => {
        dispatch(loadMessagesSuccess(messages))
      })
      .catch(error => {
        console.log('ERROR IN THUNK ACTIONS: ' + error);
        throw(error)
      });
  }
}

export function loadMessagesSuccess(messages) {
  return {type: types.LOAD_MESSAGES_SUCCESS, messages};
}