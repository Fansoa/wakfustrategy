import styled from "styled-components";
import pxToRem from "@/core/methods/pxToRem";
import Link from "next/link";

export const BreadcrumbContainer = styled.div`
  display: flex;
`

export const Chevron = styled.span`
  margin-right: ${pxToRem(8)};
  margin-left: ${pxToRem(8)};
`
export const StyledLink = styled(Link)`
  ${({theme}) => `
    text-decoration: inherit;
    font-weight: 600;
    color: ${theme.colors.nero};
    text-transform: capitalize;
    border-bottom: ${pxToRem(2)} solid ${theme.colors.nero};
  `}
`

export const CurrentPath = styled.p`
  text-transform: capitalize;
`