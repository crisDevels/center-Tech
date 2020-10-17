import React from 'react'
import { LabelSelectContent, Parragraph } from './styles'

export const LabelSelect = (props) => (
  <LabelSelectContent>
    <Parragraph>
      {props.nameRef}
    </Parragraph>
  </LabelSelectContent>
)
