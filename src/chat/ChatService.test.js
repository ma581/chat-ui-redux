import ChatService from './ChatService';
import nock from 'nock';

describe('ChatService', () => {
    it('should make a request to localhost', () => {
      const response = {id: '123ABC'};
      nock('http://localhost:8080')
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get('/messages')
        .reply(200, response);

      return ChatService.getAllMessages().then(data => {
        expect(data).toEqual(response);
      })
    });

  it('should throw error response', () => {
    nock('http://localhost:8080')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get('/messages')
      .reply(500, {});

    return ChatService.getAllMessages().catch(err => {
      expect(err).toBeTruthy();

    })
  });
});

afterEach(function () {
  nock.cleanAll();
});
