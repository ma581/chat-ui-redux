import {createMessage, loadMessages} from './ChatActions';
import * as types from "./ActionTypes";
import ChatService from './ChatService';
import configureMockStore from 'redux-mock-store'

jest.mock("./ChatService.js");
//https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c

describe('ChatActions', () => {
  const store = configureMockStore()();

  beforeEach(() => {
    jest.clearAllMocks();
    store.clearActions();
  });

  describe('loading messages', () => {

    it('should call ChatService to get all messages and dispatch SUCCESS', () => {
      const resp = {data: [{name: 'Bob'}]};
      ChatService.getAllMessages.mockImplementation(() => Promise.resolve(resp.data));
      const dispatch = store.dispatch;

      return loadMessages()(dispatch).then(() => {
        expect(store.getActions()[0]).toEqual({type: types.LOAD_MESSAGES_SUCCESS, messages: resp.data});
        expect(ChatService.getAllMessages).toHaveBeenCalledTimes(1);
      });
    });

    it('should dispatch LOAD_MESSAGES_FAILURE', () => {
      ChatService.getAllMessages.mockImplementation(() => Promise.reject());
      const dispatch = jest.fn();

      return loadMessages()(dispatch).then(() => {
        expect(ChatService.getAllMessages).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({type: types.LOAD_MESSAGES_FAIL});
      });
    });
  });

  describe('creating messages', () => {

    it('should dispatch CREATING_MESSAGE', () => {
      const mockResponse = {data: {messages: ["Blah blah"]}};
      ChatService.createMessage.mockImplementation(() => Promise.resolve(mockResponse));
      const dispatch = jest.fn();

      return createMessage()(dispatch).then(() => {
        expect(dispatch).toHaveBeenCalledWith({type: types.CREATING_MESSAGE});
        expect(ChatService.createMessage).toHaveBeenCalledTimes(1);
      });
    });


    it('should dispatch CREATED_MESSAGE', () => {
      const mockResponse = {data: {messages: ["Blah blah"]}};
      ChatService.createMessage.mockImplementation(() => Promise.resolve(mockResponse.data));
      const dispatch = jest.fn();

      return createMessage()(dispatch).then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith(
          {
            type: types.CREATED_MESSAGE,
            messages: mockResponse.data.messages
          });
      });
    });
  });
});
