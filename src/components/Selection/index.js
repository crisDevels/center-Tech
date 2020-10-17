import React, { useState } from 'react'
import { LabelSelect } from '../LabelSelect'
import { BoxPrimary, LiRanges, FlexDiv, ButtonSelect, Description, H2Title, DivHead, ImgHead, DivFlexButtonIcon, FlexMarca, ContainerMarca } from './styles'
import { BsBookmark, BsFileEarmarkPlus } from 'react-icons/bs'
import { MBRanges, MarcasMB } from '../../../api/db.json'
import { MarcaSelect } from '../marcaSelect'

const DEFAULT_IMAGE = 'https://i.imgur.com/hXuldkO.png'

export const Selection = ({ path, text, name, cover = { DEFAULT_IMAGE } }) => {
  const [buttonMarca, setButtonMarca] = useState('Elige una marca')

  const handleMarca = (ev) => {
    const value = ev.target.value
    setButtonMarca(value)
  }

  return (
    <BoxPrimary>
      <DivHead>
        <ImgHead src={DEFAULT_IMAGE} />
        <H2Title>{name}</H2Title>
      </DivHead>
      <FlexDiv>
        {
          MBRanges.map(ranges => (<LiRanges key={ranges.id}><LabelSelect nameRef={ranges.name} /></LiRanges>))
        }
      </FlexDiv>
      <Description>
        {text}
      </Description>
      <FlexMarca>
        <ContainerMarca>
          {buttonMarca}
        </ContainerMarca>
        {
          name === 'MotherBoard' &&
            <ul>
              {
                MarcasMB.map(marca => <li key={marca.id}><MarcaSelect name={marca.name} cover={marca.cover} handleMarca={handleMarca} /></li>)
              }
            </ul>
        }
      </FlexMarca>
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
}
