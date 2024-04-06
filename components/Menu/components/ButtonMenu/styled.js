import styled from "styled-components";
import pxToRem from "@/core/methods/pxToRem";
import Link from "next/link";

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const ButtonMenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: ${pxToRem(150)};
  width: ${pxToRem(150)};
  padding: ${pxToRem(5)};
  background-color: rgba(255,255,255, 0.6);
  box-shadow: ${({$isHover}) => $isHover ? 'rgba(149, 157, 165, 0.49)' : 'rgba(149, 157, 165, 0.2)'}  0px ${pxToRem(8)} ${pxToRem(24)};
  border-radius: ${pxToRem(5)};
`

export const Label = styled.h3`
  ${({theme}) => `
    text-transform: capitalize;
    text-align: center;
    color: ${theme.colors.nero};
    font-size: ${pxToRem(16)};
    font-weight: 500;
  `}
`
