import styled from "styled-components";

import Kanojedo from "../../public/kanojedo.webp"
import pxToRem from "@/core/methods/pxToRem";

export const GridContainer = styled.div`
  background-image: url(${Kanojedo.src});
  background-position: center;
  border-top-left-radius: ${pxToRem(10)};
  border-top-right-radius: ${pxToRem(10)};
  width: 100%;
  height: ${pxToRem(500)};
  overflow: hidden;
  position: relative;
  `
  
  export const GridBox = styled.div`
  width: ${({$boardSize, $squaresSize}) => pxToRem(($boardSize*$squaresSize).toString())};
  background-color: transparent;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  rotate: 45deg;
  transform: skew(-18deg, -18deg);
  margin: auto;
  `

export const SpellButtonsListContainer = styled.div`
  padding: ${pxToRem(20)};
`
