import React from 'react'

import { Category } from '../category'

import { components } from '../../../api/db.json'

import { List, ComponentSelect, TitleFormInteractive } from './styles'

export const ListSelect = () => (
  <div>
    <TitleFormInteractive>Customize your hardware</TitleFormInteractive>
    <List>
      {
        components.map(selected => (<ComponentSelect key={selected.id}><Category {...selected} /></ComponentSelect>))
      }
    </List>
  </div>
)
