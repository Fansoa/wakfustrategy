import Link from "next/link";
import styled from "styled-components";
import pxToRem from "@/core/methods/pxToRem";

export const FamilyMonsterListContainer = styled.div`
margin-top: ${pxToRem(125)};
background-color: rgba(0,0,0,0.1);
width: ${pxToRem(500)};
padding: ${pxToRem(20)};
border-radius: ${pxToRem(5)};
margin: ${pxToRem(125)} auto 0 auto;
`

export const StyledLink = styled(Link)`
  ${({theme}) => `
    color: ${theme.colors.nero};
    text-transform: capitalize;
    display: flex;
    border-radius: ${pxToRem(5)};
    height: ${pxToRem(50)};
    width: 100%;
    background-color: rgba(255,255,255,0.6);
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: ${pxToRem(16)};
    font-weight: 500;
  `}
`
