import axios from 'axios';

export default class ChatService {
  static getAllMessages() {
    return axios.get("http://localhost:8080/messages")
      .then(res => res.data)
  }
}
