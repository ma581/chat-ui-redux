import {loadMessages, loadMessagesSuccess} from './ChatActions';
import * as types from "./ActionTypes";

jest.mock("../components/chat/ChatService");

describe('ChatActions', () => {
  it('should fire SUCCESS', () => {
    // expect(true).toBe(true);

    loadMessages();
    // expect(ChatService).toHaveBeenCalledTimes(1);

  });

  it('should create LOAD_MESSAGES_SUCCESS action', () => {
    const messages = {};
    const expectedAction = {type: types.LOAD_MESSAGES_SUCCESS, messages};

    const action = loadMessagesSuccess(messages);

    expect(action).toEqual(expectedAction);
  });

  it('should fire FAILURE', () => {
    // expect(true).toBe(true);

    loadMessages();


  });
});
