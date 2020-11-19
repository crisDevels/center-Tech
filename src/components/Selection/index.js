import React, { Fragment, useState } from 'react'
import { LabelSelect } from '../LabelSelect'
import { BoxPrimary, DivFlexTitle, LiRanges, FlexDiv, ButtonSelect, H2Title, DivHead, ImgHead, DivFlexButtonIcon, FlexMarca, ContainerDetails } from './styles'
import { BsBookmark, BsFileEarmarkPlus } from 'react-icons/bs'

const DEFAULT_IMAGE_GAMER = 'https://i1.wp.com/www.tecnologiaclic.com/wp-content/uploads/2018/11/pc-gamer.jpg?fit=1000%2C600&ssl=1'
const DEFAULT_IMAGE_CORPORATIVE = 'https://resources.claroshop.com/medios-plazavip/s2/10487/1350424/5e725591cb2dd-f76f3b79-3e52-4eb6-b430-efc86809c2f2-1600x1600.jpg'
const DEFAULT_IMAGE_STUDENT = 'https://images.squarespace-cdn.com/content/v1/58c43562a5790aa56a886623/1561145829123-FOBFL17WE1W67GX55O9N/ke17ZwdGBToddI8pDm48kInU2uhB6sUNzfUBYP40q4AUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcoravjv0RwKmy5HHCraM7y0iVYJnU-pc-BSbJTq8tG3_4g0CGRB5FBMWLE5wezWed/Archisoup-computers-for-students.jpg'

const IMAGE_MOTHER = 'https://storage-asset.msi.com/event/2020/mb/amd-550-motherboard/images/msi-motherboards-b550-ligntning_gen4.jpg'
const IMAGE_PROCESSOR = 'https://i.imgur.com/hXuldkO.png'
const IMAGE_GRAPHIC = 'https://assets1.ignimgs.com/2019/04/05/graphicscards2019-blogroll-1554499813756.jpg?width=1280'


import { FaGraduationCap } from 'react-icons/fa'
import { IoLogoGameControllerB } from 'react-icons/io'
import { RiBuilding2Fill } from 'react-icons/ri'
import { DetailsComponent } from '../DetalilsComponent'
import { DescriptionComponent } from '../descriptionComponent'

var styledColor = {
  color: 'white'
}

export const Selection = ({ path, use, title, description, motherBoardBrand, motherBoardRef, proccesorBrand, proccesorRef, graphicsBrand, graphicsRef }) => {
  const [containerD, setContainerD] = useState(true)
  const [containerMB, setContainerMB] = useState(false)
  const [containerP, setContainerP] = useState(false)
  const [containerG, setContainerG] = useState(false)

  const activeDescription = () => {
    setContainerD(true)
    setContainerMB(false)
    setContainerP(false)
    setContainerG(false)
  }

  const activeMB = () => {
    setContainerMB(true)
    setContainerD(false)
    setContainerP(false)
    setContainerG(false)
  }

  const activeP = () => {
    setContainerP(true)
    setContainerD(false)
    setContainerMB(false)
    setContainerG(false)
  }

  const activeG = () => {
    setContainerG(true)
    setContainerD(false)
    setContainerMB(false)
    setContainerP(false)
  }

  return (
    <BoxPrimary>
      <DivHead>
        {
          use === "gamer" &&
          <Fragment>
            <ImgHead src={DEFAULT_IMAGE_GAMER} />
            <DivFlexTitle>
              <IoLogoGameControllerB style={styledColor} size='25px' />
              <H2Title onClick={activeDescription}>{title}</H2Title>
            </DivFlexTitle>
          </Fragment>
        }
        {
          use === 'corporative' && 
          <Fragment>
            <ImgHead src={DEFAULT_IMAGE_CORPORATIVE} />
            <DivFlexTitle>
              <RiBuilding2Fill style={styledColor} size='25px' />
              <H2Title onClick={activeDescription}>{title}</H2Title>
            </DivFlexTitle>
          </Fragment>
        }
        {
          use === 'student' && 
          <Fragment>
            <ImgHead src={DEFAULT_IMAGE_STUDENT} />
            <DivFlexTitle>
              <FaGraduationCap style={styledColor} size='25px' />
              <H2Title onClick={activeDescription}>{title}</H2Title>
            </DivFlexTitle>
          </Fragment>
          
        }
      </DivHead>
      <FlexDiv>
        {/* {
          components.map(ranges => (<LiRanges key={ranges.id}><LabelSelect {...ranges} /></LiRanges>))
        } */}
        <LiRanges onClick={activeMB}>
          <LabelSelect cover={IMAGE_MOTHER} nameRef='Mother Board' />
        </LiRanges>
        <LiRanges onClick={activeP}>
          <LabelSelect cover={IMAGE_PROCESSOR} nameRef='Processor' />
        </LiRanges>
        <LiRanges onClick={activeG}>
          <LabelSelect cover={IMAGE_GRAPHIC} nameRef='Graphic Card' />
        </LiRanges>
      </FlexDiv>
      <FlexMarca>
        <ContainerDetails>
          <DescriptionComponent description={description} openDescription={containerD}/>
          <DetailsComponent subtitle='Mother Board' refe={motherBoardRef} brand={motherBoardBrand} open={containerMB} />
          <DetailsComponent subtitle='Graphic Card' refe={graphicsRef} brand={graphicsBrand} open={containerG} />
          <DetailsComponent subtitle='Processor' refe={proccesorRef} brand={proccesorBrand} open={containerP} />
        </ContainerDetails>
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
