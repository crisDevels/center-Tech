import styled from 'styled-components'

export var IMAGEBackground = 'https://tecnobits.net/wp-content/uploads/2019/01/pc-gamer-2019-rtx-2060.jpg'

export const BackImage = styled.div`
  position: relative;
  background-image: url(${IMAGEBackground});
  width: 100%;
  height: 350px;
  background-size: cover;
`

export const ImageMotherBoard = styled.div`
  position: absolute;
  top: 20px;
  left: 15px;
`

export const ImgMother = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 5px solid white;
  object-fit: cover;
`
