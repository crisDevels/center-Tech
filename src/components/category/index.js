import React from 'react'

import { ContainerImg, ImgCategory, CircleBack, TextCategory } from './styles'

export const Category = ({ cover, name }) => {
  return (
    <div>
      <ContainerImg>
        <ImgCategory src={cover} />
        <CircleBack />
      </ContainerImg>
      <TextCategory>{name}</TextCategory>
    </div>
  )
}
