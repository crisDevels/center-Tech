import React from 'react'

import { ListSelect } from './components/ListSelect'
import { ListLabel } from './components/ListLabels'

import { GlobalStyles } from './GlobalStyles'
import { Logo } from './components/Logo'
import { PcComponents } from './components/pcComponents'

export const App = () => (
  <div>
    <GlobalStyles />
    <Logo />
    <ListSelect />
    <ListLabel />
  </div>
)
