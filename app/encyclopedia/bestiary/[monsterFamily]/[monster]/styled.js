import styled from "styled-components";
import pxToRem from "@/core/methods/pxToRem";

export const GridContainer = styled.div`
  margin-top: ${pxToRem(50)};
  border-radius: ${pxToRem(10)};
  margin-left: ${pxToRem(40)};
  margin-right: ${pxToRem(40)};
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: rgb(51 56 61 / 22%) 0px ${pxToRem(8)} ${pxToRem(24)};
`

export const BannerContainer = styled.div`
  padding-top: ${pxToRem(50)};
`
