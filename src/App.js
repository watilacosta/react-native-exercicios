import React from 'react'
import { View, StyleSheet } from 'react-native'

import Simples from './componentes/Simples'
import Parimpar from './componentes/Parimpar'
import Inverter, { MegaSena } from './componentes/Multi'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto='Texto flexível!'/>
        <Parimpar numero  = {31} />
        <Inverter texto   = 'React Native' />
        <MegaSena numeros = {5} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:     'center',
  }
})
