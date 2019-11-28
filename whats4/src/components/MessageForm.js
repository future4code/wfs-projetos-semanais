import React from 'react';
import styled from 'styled-components'

const MessageFormContainer = styled.div`
  display: flex;
`

const UserInput = styled.input`
  width: 100px;
`

const TextInput = styled.input`
  flex: 1;
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

  onSendMessage = () => {
    const message = {
      user: this.state.userValue,
      text: this.state.textValue
    }

    this.props.addMessage(message)

    this.setState({textValue: ''})
  }

  render() {
    return (
      <MessageFormContainer>
        <UserInput type="text" placeholder={'Usuário'} onChange={this.onChangeUser} value={this.state.userValue}/>
        <TextInput type="text" placeholder={'Mensagem'} onChange={this.onChangeText}  value={this.state.textValue}/>
        <button onClick={this.onSendMessage}>Enviar</button>
      </MessageFormContainer>
    );
  }
}

const listaDePosts = [{
  urlImagem: 'https://picsum.photos/300/200',
  urlFotoUsuario: 'https://picsum.photos/100/100',
  nomeUsuario: 'future4.br',
  curtidoPorMim: false,
  comentarios: [
    {
      texto: 'Que foto incrivel!',
      curtidoPorMim: true
    },
    {
      texto: 'Muito daora!!!',
      curtidoPorMim: false
    },
  ]
}]


function App() {
  return <div>
      <MeuComponente />
  </div>
}
const MeuComponente = styled.div``