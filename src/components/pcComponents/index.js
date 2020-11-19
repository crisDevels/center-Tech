import React, { Fragment } from 'react'

import { BackImage, ImageMotherBoard, ImgMother } from './styles'

var imageDEFAULT = 'https://tecnobits.net/wp-content/uploads/2019/01/pc-gamer-2019-rtx-2060.jpg'

export const PcComponents = (props) => {
  return (
    <Fragment>
      <BackImage>
        <ImageMotherBoard>
          <ImgMother src={imageDEFAULT} />
        </ImageMotherBoard>
      </BackImage>
    </Fragment>
  )
}