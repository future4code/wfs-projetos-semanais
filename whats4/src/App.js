import React from 'react';
import './App.css';
import styled from 'styled-components'
import { MessageForm } from './components/MessageForm';
import { Message } from './components/Message';

const AppContainer = styled.div`
  max-width: 600px;
  height: 100vh;
  border: 1px solid black;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #e5ddd5;
`

const MessagesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`

const BoldText = styled.span`
  font-weight: bold;
`

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      messages: []
    }
  }

  addMessage = (message) => {
    this.setState({ messages: [...this.state.messages, message] })
  }

  deleteMessage = (message) => {
    this.setState({messages: this.state.messages.filter(msg => msg !== message)})
  }

  render() {
    return (
      <AppContainer>
        <MessagesContainer>
          {
            this.state.messages.map((message, index) => <Message deleteMessage={this.deleteMessage} message={message} key={index}></Message>)
          }
        </MessagesContainer>
        <MessageForm addMessage={this.addMessage} />
      </AppContainer>
    );
  }
}

export default App;
