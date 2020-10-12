import React from 'react'

import { ListSelect } from './components/ListSelect'
import { ListLabel } from './components/ListLabels'

import { GlobalStyles } from './GlobalStyles'
import { Logo } from './components/Logo'

export const App = () => (
  <div>
    <GlobalStyles />
    <Logo />
    <ListSelect />
    <ListLabel />
  </div>
)
