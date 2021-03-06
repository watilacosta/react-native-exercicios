import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples                from './componentes/Simples'
import Parimpar               from './componentes/Parimpar'
import Inverter, { MegaSena } from './componentes/Multi'
import Contador               from './componentes/Contador'
import Plataformas            from './componentes/Plataformas'
import ValidarProps           from './componentes/ValidarProps'
import Evento                 from './componentes/Evento'

export default createDrawerNavigator({
  Evento: {
    screen: Evento
  },
  ValidarProps: {
    screen: () => <ValidarProps ano={19} />
  },
  Plataformas: {
    screen: () => <Plataformas />
  },
  Contador: {
    screen: () => <Contador numeroInicial = {0} />
  },
  MegaSena: {
    screen: () => <MegaSena numeros = {8} />,
    navigationOptions: { title: 'Mega Sena' }
  },
  Inverter: {
    screen: () => <Inverter texto = 'React Native' />
  },
  Parimpar: {
    screen: () => <Parimpar numero = {6} />,
    navigationOptions: { title: 'Par ou Ímpar' }
  },
  Simples: {
    screen: () => <Simples texto = 'Texto Flexível' />
  }
}, { drawerWidth: 300 })
