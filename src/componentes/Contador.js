import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Contador extends Component {

  state = {
    // valor inicial vindo do menu como propriedade
    numero: this.props.numeroInicial
  }

  incrementar = () => {
    this.setState({numero: this.state.numero + 1})
  }

  limpar = () => {
    this.setState({numero: this.props.numeroInicial})
  }

  render() {
    return (
      <View>
        <Text style={{marginTop: 20}}>{this.state.numero}</Text>
        
        <TouchableHighlight
          onPress={this.incrementar}
          onLongPress={this.limpar} >
          <Text style={{fontSize: 15}}>Incrementar/Limpar</Text>
        </TouchableHighlight>
      </View>
    )
  }
}