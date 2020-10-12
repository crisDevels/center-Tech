import { css, keyframes } from 'styled-components'

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0px);
    opacity: 1;
  }
`

const RGBinfinite = keyframes`
  from {
    transform: rotateZ(0)
  }

  to {
    transform: rotateZ(360deg)
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
  animation: ${time} ${fadeInKeyFrames} ${type};
  `

export const RGBEffect = ({ time = '2s', type = 'linear' } = {}) =>
  css`
  animation: ${time} infinite ${RGBinfinite} ${type};
  `
