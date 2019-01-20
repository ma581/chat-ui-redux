import chatService from "../components/chat/ChatService";
import * as types from './actionTypes';

export function loadMessages() {
  return function (dispatch) {
    return chatService.getAllMessages()
      .then(messages => {
        dispatch(loadMessagesSuccess(messages))
      })
      .catch(error => {
        throw(error)
      });
  }
}

export function loadMessagesSuccess(messages) {
  return {type: types.LOAD_MESSAGES_SUCCESS, messages};
}
