import React from 'react'
import { LabelSelectContent, SpaceContainer, ImgComponent, PNameRef} from './styles'

export const LabelSelect = ({ cover }) => (
  <LabelSelectContent>
    <SpaceContainer>
      <ImgComponent src={cover} alt='se da contexto a los components' />
    </SpaceContainer>
  </LabelSelectContent>
)
