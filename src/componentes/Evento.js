import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

import Padrao from '../estilo/Padrao'


export default class Evento extends Component {

  state = {
    // componente não controlado
    texto: null
  }

  alterarTexto = texto => {
    // quando o param e o atributo tem o mesmo nome
    // podemos utilizar desta forma reduzida
    this.setState({ texto })
  }

  render() {
    return (
      <View>
        <Text style={Padrao.font40}>{this.state.texto}</Text>
        <TextInput
          value={this.state.texto}
          style={Padrao.input}
          onChangeText={this.alterarTexto} />
      </View>
    )
  }

}
