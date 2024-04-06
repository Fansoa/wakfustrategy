'use client';

import Banner from "@/components/Banner";
import FamilyMonsterList from "./components/FamilyMonsterList";

import { BannerContainer } from "./styled";

const pathsList = [
  {
    label: 'Accueil',
    href: '/'
  },
  {
    label: 'encyclopédie',
    href: '/encyclopedia'
  },
  {
    label: 'bestiaire',
  }
]

const Bestiary = () => {
  return <div>
      <BannerContainer>
        <Banner label='Bestiaire' pathsList={pathsList}/>
      </BannerContainer>
      <FamilyMonsterList/>
    </div>
}

export default Bestiary;
