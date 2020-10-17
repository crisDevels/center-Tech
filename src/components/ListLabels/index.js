import React from 'react'
import { Selection } from '../Selection'

import { ListInput, ComponentList } from './styles'

export const ListLabel = () => (
  <ListInput>
    <ComponentList>
      <Selection name='MotherBoard' text='La placa madre es la tarjeta de circuito integrado principal del sistema informático, a la que se acoplan los demás componentes que constituyen el computador.' path='/motherboard' />
      <Selection name='Processor' text='Su función es procesar los datos, controlar el funcionamiento de todos los dispositivos del ordenador, al menos de gran parte de ellos y lo más importante: se encarga de realizar las operaciones lógicas y matemáticas.' path='/motherboard' />
      <Selection name='Graphic Card' text='La tarjeta gráfica se encarga de procesar los datos que le envía el procesador del ordenador y transformarlos en información visible y comprensible para el usuario.' path='/motherboard' />
    </ComponentList>
  </ListInput>
)
