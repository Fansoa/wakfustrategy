'use client';

import PropTypes from 'prop-types';
import { StyledLink, ButtonMenuContainer, Label } from "./styled";
import Image from "next/image";
import { useState } from "react";

const ButtonMenu = ({href, imgSrc, label, style}) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <StyledLink href={`/encyclopedia/${href}`} onMouseOver={()=> setIsHover(true)} onMouseOut={()=> setIsHover(false)}>
      <ButtonMenuContainer $isHover={isHover}>
        <Image
          src={imgSrc}
          alt={`${label} illustration`}
          width={100}
          height={100}
          priority={false}
          style={style}
        />
        <Label>{label}</Label>
      </ButtonMenuContainer>
    </StyledLink>
  )
}

ButtonMenu.propTypes = {
  href: PropTypes.string,
  imgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  label: PropTypes.string,
  style: PropTypes.shape({})
}

export default ButtonMenu;
