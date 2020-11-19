import React from 'react'

import { Category } from '../category'

import { categories } from '../../../api/db.json'

import { List, ComponentSelect, TitleFormInteractive } from './styles'

export const ListSelect = () => (
  <div>
    <TitleFormInteractive>Our Categories</TitleFormInteractive>
    <List>
      {
        categories.map(selected => (<ComponentSelect key={selected.id}><Category {...selected} /></ComponentSelect>))
      }
    </List>
  </div>
)
