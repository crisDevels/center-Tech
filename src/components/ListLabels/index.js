import React from 'react'
import { Selection } from '../Selection'

import { ListInput, ComponentList } from './styles'

export const ListLabel = () => (
  <ListInput>
    <ComponentList>
      <Selection name='MotheBoard' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' path='/motherboard' />
      <Selection name='Processor' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' path='/motherboard' />
      <Selection name='Graphic Card' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' path='/motherboard' />
    </ComponentList>
  </ListInput>
)
