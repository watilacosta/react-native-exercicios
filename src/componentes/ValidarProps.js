import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const ValidarProps = props =>
  <Text style={{fontSize: 30}}>
    {props.label}
    {props.ano + 2000}
  </Text>

//  VALOR DEFAULT PARA DETERMINADA PROPRIEDADE
ValidarProps.defaultProps = {
  label: 'Ano: '
}

// VALIDAÇÂO DE PROPRIEDADES
ValidarProps.propTypes = {
  ano: PropTypes.number.isRequired
}

export default ValidarProps
