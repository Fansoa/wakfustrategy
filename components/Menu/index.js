'use client';

import PropTypes from 'prop-types';
import ButtonMenu from "./components/ButtonMenu";
import { MenuContainer } from "./styled";

const Menu = ({data}) => {
  return (
    <MenuContainer>
      {data.map((item, i) => <ButtonMenu key={`${item.name}-${i}`} href={item.href} imgSrc={item.img} label={item.name} style={item.style}/>)}
    </MenuContainer>
  )
}

Menu.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    img: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
    style: PropTypes.shape({}),
    name: PropTypes.string
  }))
}

export default Menu;
