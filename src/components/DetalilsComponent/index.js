import React from 'react'

import { DivContainer } from './styles'

export const DetailsComponent = ({ subtitle, refe, brand, open })=> {
  if(!open) {
    return null
  }
  
  return (
    <DivContainer>
      <h4>{subtitle}</h4>
      <p>
        <strong>Referencia:</strong> {refe}
      </p>
      <p>
        <strong>Marca:</strong> {brand}
      </p>
    </DivContainer>
  )
}
