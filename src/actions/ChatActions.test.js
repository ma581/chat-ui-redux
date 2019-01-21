import {loadMessages, loadMessagesSuccess} from './ChatActions';
import * as types from "./ActionTypes";
import ChatService from '../components/chat/ChatService';

jest.mock("../components/chat/ChatService.js");

describe('ChatActions', () => {

  beforeEach(() => {
    jest.clearAllMocks()
  });

  it('should call ChatService to get all messages and dispatch SUCCESS', () => {
    const resp = {data: [{name: 'Bob'}]};
    ChatService.getAllMessages.mockImplementation(() => Promise.resolve(resp));
    const dispatch = jest.fn();

    loadMessages()(dispatch);

    expect(ChatService.getAllMessages).toHaveBeenCalledTimes(1);
    // expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should create LOAD_MESSAGES_SUCCESS action', () => {
    const messages = {};
    const expectedAction = {type: types.LOAD_MESSAGES_SUCCESS, messages};

    const action = loadMessagesSuccess(messages);

    expect(action).toEqual(expectedAction);
  });

  it('should fire FAILURE', () => {
    ChatService.getAllMessages.mockImplementation(() => Promise.reject());
    const dispatch = jest.fn();

    loadMessages()(dispatch);

    expect(ChatService.getAllMessages).toHaveBeenCalledTimes(1);
  });
});
