import ChatService from "./ChatService";
import * as types from '../common/ActionTypes';

export const loadMessages = () => dispatch =>
  ChatService.getAllMessages()
    .then(messages => {
      dispatch(loadMessagesSuccess(messages))
    })
    .catch(error => {
      console.log('ERROR IN THUNK ACTIONS: ' + error);
      throw(error)
    });


export const loadMessagesSuccess = (messages) => (
  {type: types.LOAD_MESSAGES_SUCCESS, messages});

