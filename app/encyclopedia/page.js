'use client';

import Banner from "@/components/Banner";
import Menu from "@/components/Menu";
import Sprite from '../../public/sprite.png'

import { MenuContainer, BannerContainer } from "./styled";

const pathsList = [
  {
    label: 'Accueil',
    href: '/'
  },
  {
    label: 'Encyclopedie',
  }
]

const data = [
  {
    name: 'bestiaire',
    href: '/bestiary',
    img: Sprite,
    style: {
      objectFit: 'none',
      objectPosition: '16px -415px'
    }
  },
]

const Encyclopedia = () => {
  return <>
    <BannerContainer>
      <Banner label='encyclopedie' pathsList={pathsList}/>
    </BannerContainer>
    <MenuContainer>
      <Menu data={data}/>
    </MenuContainer>
    </>
}

export default Encyclopedia;
