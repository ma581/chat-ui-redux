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

export const createMessage = (message) => dispatch => {
  dispatch({type: types.CREATING_MESSAGE});
  return ChatService.createMessage(message).then(data => {
    dispatch(createdMessage(data.messages))
  })
};

const loadMessagesSuccess = (messages) => (
  {type: types.LOAD_MESSAGES_SUCCESS, messages});

const createdMessage = (messages) => (
  {type: types.CREATED_MESSAGE, messages});

const loadMessagesFail = (err) => (
  {type: types.LOAD_MESSAGES_FAIL, err});

