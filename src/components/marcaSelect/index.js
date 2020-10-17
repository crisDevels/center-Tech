import React from 'react'
import { ImageMarca, InputMarca, LabelMarca } from './styles'

export const MarcaSelect = (props) => (
  <LabelMarca>
    <ImageMarca src={props.cover} alt='marca MotherBoard png sin fondo' />
    <InputMarca type='radio' name='marcaMB' value={props.name} onChange={props.handleMarca} />{props.name}
  </LabelMarca>
)
