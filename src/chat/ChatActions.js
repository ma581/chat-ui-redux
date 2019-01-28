import ChatService from "./ChatService";
import * as types from './ActionTypes';

export const loadMessages = () => dispatch =>
  ChatService.getAllMessages()
    .then(messages => {
      dispatch(loadMessagesSuccess(messages))
    })
    .catch(error => {
      dispatch(loadMessagesFail(error))
    });


const loadMessagesSuccess = (messages) => (
  {type: types.LOAD_MESSAGES_SUCCESS, messages});

const loadMessagesFail = (err) => (
  {type: types.LOAD_MESSAGES_FAIL, err});

