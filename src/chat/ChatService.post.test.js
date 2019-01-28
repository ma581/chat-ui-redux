import ChatService from './ChatService';
import axios from 'axios';

jest.mock('axios');

describe('ChatService', () => {
  it('should make a POST to localhost', () => {
    const message = {id: '123ABC', message: "Blah blah"};
    const mockResponse = {data: {messages: ["Blah blah"]}};
    axios.post.mockResolvedValue(mockResponse);

    return ChatService.createMessage(message).then(res => {
      expect(res).toEqual(mockResponse.data);
    })
  });
});

