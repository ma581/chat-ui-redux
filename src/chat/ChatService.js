import axios from 'axios';

export default class ChatService {
  static getAllMessages() {
    return axios.get("http://localhost:8080/messages")
      .then(res => {
        return res.data
      })
      .catch(e => console.log('Could not retrieve messages: ' + e));
  }
}
