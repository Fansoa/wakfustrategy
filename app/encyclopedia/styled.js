import styled from "styled-components"
import pxToRem from "@/core/methods/pxToRem"

import bg from '../../public/424531.webp';

export const Container = styled.div`
  background-image: url(${bg.src});
  max-width: ${pxToRem(1200)};
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
  margin: 0 auto;
`

export const Copyright = styled.div`
  ${({theme}) => `
    color: ${theme.colors.nero};
    text-align: center;
    padding-top: ${pxToRem(50)};
    padding-bottom: ${pxToRem(50)};
    margin-left: ${pxToRem(60)};
    margin-right: ${pxToRem(60)};
  `}
`

export const MenuContainer = styled.div`
  margin-top: ${pxToRem(125)};
  display: flex;
  justify-content: center;
`

export const BannerContainer = styled.div`
  padding-top: ${pxToRem(50)};
`
