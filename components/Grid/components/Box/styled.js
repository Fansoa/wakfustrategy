import styled from "styled-components";
import pxToRem from "@/core/methods/pxToRem";

export const BoxContainer = styled.div`
  ${({$size, $state, theme}) => `
    border: ${pxToRem(1)} white solid;
    width: ${$size}px;
    height: ${$size}px;
    background-color: ${theme.boxTheme[$state].backgroundColor};
  `
  }
`
