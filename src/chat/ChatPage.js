import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {loadMessages} from './ChatActions';

export class ChatPage extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.loadMessages();
  }

  messageRow(message, index) {
    return <div key={index}> {message.text}</div>
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Chat page</h1>
        <div id="messages">{this.props.messages.map(this.messageRow)}</div>
      </div>);
  }
}

ChatPage.propTypes = {
  messages: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    messages: state.chatReducer.messages
  }
}

function mapDispatchToProps(dispatch){
  return {
    loadMessages: () =>  dispatch(loadMessages())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage);
