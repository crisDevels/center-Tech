import styled from 'styled-components'
import { fadeIn, RGBEffect } from '../../styles/animations'

export const ContainerImg = styled.div`
  position: relative;
  display:flex;
  align-items: center;
  justify-content: center;
  top: 0;
  height: 65px;
`
export const ImgCategory = styled.img`
  ${fadeIn()}
  position: absolute;
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`
export const CircleBack = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  ${RGBEffect()}
  box-shadow: 0px 3px 4px #52b548;
`
export const TextCategory = styled.p`
  text-align: center;
  font-size: 14px;
`
