import React from 'react'
import { LabelSelect } from '../LabelSelect'
import { BoxPrimary, FlexDiv, ButtonSelect, Description, H2Title, DivHead, ImgHead, DivFlexButtonIcon } from './styles'
import { BsBookmark, BsFileEarmarkPlus } from 'react-icons/bs'

const DEFAULT_IMAGE = 'https://i.imgur.com/hXuldkO.png'

export const Selection = ({ path, text, name, cover = { DEFAULT_IMAGE } }) => (
  <BoxPrimary>
    <DivHead>
      <ImgHead src={DEFAULT_IMAGE} />
      <H2Title>{name}</H2Title>
    </DivHead>
    <FlexDiv>
      <LabelSelect nameRef='Top range' />
      <LabelSelect nameRef='Medium range' />
      <LabelSelect nameRef='Amateur range' />
    </FlexDiv>
    <Description>
      {text}
    </Description>
    <DivFlexButtonIcon>
      <a href={path}>
        <ButtonSelect type='button'><BsBookmark size='26px' /></ButtonSelect>
      </a>
      <a href={path}>
        <ButtonSelect type='button'><BsFileEarmarkPlus size='26px' /></ButtonSelect>
      </a>
    </DivFlexButtonIcon>
  </BoxPrimary>
)
