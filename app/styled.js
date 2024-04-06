import styled from "styled-components";

import home from '../public/home.webp';
import Link from "next/link";
import pxToRem from "@/core/methods/pxToRem";

export const PageContainer = styled.div`
  ${({theme}) => `
    color: ${theme.colors.nero};
    background-image: url(${home.src});
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`

export const Modal = styled.div`
  width: ${pxToRem(800)};
  max-width: 90%;
  padding: 20px;
  background-color: rgb(255,255,255,0.5);
  border-radius: ${pxToRem(20)};
`


export const Copyright = styled.div`
  color: rgb(255,255,255,0.7);
  text-align: center;
  padding-top: ${pxToRem(100)};
  padding-bottom: ${pxToRem(50)};
  margin-left: ${pxToRem(60)};
  margin-right: ${pxToRem(60)};
`

export const Title = styled.h1`
  margin-bottom: ${pxToRem(10)};
`

export const Description = styled.p`
  font-size: ${pxToRem(24)};
`

export const StyledLink = styled(Link)`
  width: 100%;
`
