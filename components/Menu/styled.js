import styled from "styled-components";
import pxToRem from "@/core/methods/pxToRem";

export const MenuContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: ${pxToRem(20)};
width: ${pxToRem(360)};
padding: ${pxToRem(20)};
background-color: rgba(0,0,0,0.1);
border-radius: ${pxToRem(5)};
`
