import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const BoxPrimary = styled.div`
  ${fadeIn()}
  border: 1px solid #c4c4c4;
  border-radius: 15px;
  text-align: center;
  padding: 0;
  margin: 10px 5px ;
`

export const DivFlexTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  height: 100px;
`

export const ContainerLogoCategory = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(black, purple);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid white;
`

export const ImgHead = styled.img`
  position: absolute;
  width: 100%;
  height: 120px;
  object-fit: cover;
  overflow: hidden;
  left: 0;
  top: 0;
  border-radius: 10px 10px 0 0;
  z-index: 0;
  filter: brightness(.3);
`

export const H2Title = styled.h2`
  color: white;
  margin: 0 0 0 10px;
  text-decoration: underline;
`

export const FlexDiv = styled.ul`
  display: flex;
  margin: 10px 0;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  z-index: 1;
  top: 40px;
  padding-inline-start: 0px;
`
export const LiRanges = styled.li`
  width: 30%;
`

export const Image = styled.img`
  display: none;
  ${fadeIn()}
`
export const ButtonSelect = styled.button`
  border-style: none;
  color: #757575;
  background: none;
  margin: 15px 0;
  & svg {
    color: #757575;
    margin: 0 4px;
  }
`
export const FlexMarca = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const ContainerDetails = styled.div`
  background: #f1f1f1;
  border-radius: 7px;
  width: 95%;
  height: 200px;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, .25);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #f1f1f1;
  border-radius: 7px;
`

export const Description = styled.div`
  background: #f3f3f3;
  border-radius: 7px;
  height: 100%;
  width: 100%
`
export const DivHead = styled.div`
  position: relative;
  top: 0;
  height: 35px;
  display: flex;
  justify-content: center;
  text-align: center;
`

export const DivFlexButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
