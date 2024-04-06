import styled from "styled-components";
import pxToRem from "@/core/methods/pxToRem";

export const MenuContainer = styled.div`
  margin-top: ${pxToRem(125)};
  display:flex;
  justify-content: center;
`

export const BannerContainer = styled.div`
  padding-top: ${pxToRem(50)};
`
