import React from 'react'
import { ImageBackground, Parragraph } from './styles'

export const LabelSelect = (props) => (
  <ImageBackground>
    <Parragraph>
      {props.nameRef}
    </Parragraph>
  </ImageBackground>
)
