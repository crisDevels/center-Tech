import React from 'react'
import { Selection } from '../Selection'

import { ListInput, ComponentList } from './styles'

import { computers } from '../../../api/db.json'

export const ListLabel = () => (
  <ListInput>
    <ComponentList>
      {
        computers.map(pc => (<div key={pc.id}><Selection {...pc} /></div>))
      }
    </ComponentList>
  </ListInput>
)
