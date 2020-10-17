import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const BoxPrimary = styled.div`
  ${fadeIn()}
  border: 1px solid #ddd;
  border-radius: 15px;
  text-align: center;
  padding: 0;
  margin: 10px 5px ;
`

export const H2Title = styled.h2`
  color: white;
  position: absolute;
`

export const FlexDiv = styled.ul`
  display: flex;
  margin: 10px 0;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  z-index: 1;
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
`
export const ContainerMarca = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 10px red;
  width: 50%;
  height: 50px;
`

export const Description = styled.p`
  color: #757575;
  font-size: 14px;
`
export const DivHead = styled.div`
  position: relative;
  top: 0;
  height: 35px;
  display: flex;
  justify-content: center;
  text-align: center;
`
export const ImgHead = styled.img`
  position: absolute;
  width: 100%;
  height: 70px;
  object-fit: cover;
  overflow: hidden;
  left: 0;
  top: 0;
  border-radius: 10px 10px 0 0;
  z-index: 0;
  filter: brightness(.7);
`

export const DivFlexButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
