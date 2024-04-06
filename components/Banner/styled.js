import styled from "styled-components";
import pxToRem from "@/core/methods/pxToRem";

export const BannerContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  padding-top: ${pxToRem(5)};
  justify-content: space-between;
  padding-right: ${pxToRem(20)};
  padding-left: ${pxToRem(20)};
  align-items: end;
`

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(20)};
`

export const Label = styled.h1`
  ${({theme}) => `
    font-size: ${pxToRem(64)};
    color: ${theme.colors.nero};
    text-transform: capitalize;
  `}
`
export const BreadcrumbContainer = styled.div`
  padding-top: ${pxToRem(8)};
  padding-bottom: ${pxToRem(20)};
  padding-left: ${pxToRem(20)};
`
