import React from 'react';
import styled from 'styled-components'

const MessageFormContainer = styled.form`
  display: grid;
  grid-template-columns: 100px 1fr 75px;
  gap: 10px;
  height: 60px;
  padding: 10px;
`

const UserInput = styled.input`
  width: 100px;
  padding: 5px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`

const TextInput = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`

const SendButton = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
`

export class MessageForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userValue: '',
      textValue: ''
    }
  }

  onChangeUser = (event) => {
    this.setState({userValue: event.target.value})
  }

  onChangeText = (event) => {
    this.setState({textValue: event.target.value})
  }

  onSendMessage = (event) => {
    event.preventDefault()
    const message = {
      user: this.state.userValue,
      text: this.state.textValue
    }

    this.props.addMessage(message)

    this.setState({textValue: ''})
  }

  render() {
    return (
      <MessageFormContainer onSubmit={this.onSendMessage}>
        <UserInput type="text" placeholder={'Usuário'} onChange={this.onChangeUser} value={this.state.userValue}/>
        <TextInput type="text" placeholder={'Mensagem'} onChange={this.onChangeText}  value={this.state.textValue}/>
        <SendButton>Enviar</SendButton>
      </MessageFormContainer>
    );
  }
}