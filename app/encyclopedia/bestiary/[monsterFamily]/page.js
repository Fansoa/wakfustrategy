'use client';

import monsters from "@/app/data/monsters";

import PropTypes from 'prop-types';

import { BannerContainer, MenuContainer } from "./styled";

import Banner from "@/components/Banner";
import Menu from "@/components/Menu";

import { useEffect, useState } from "react";

const MonsterFamily = ({params}) => {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    const fetchedData = monsters.filter(monster => monster.familySlug === params.monsterFamily)

    const dataWithHref = fetchedData.reduce((acc, curr) => {
      return [...acc, {href: `bestiary/${curr.familySlug}/${curr.slug}`, ...curr}]
  },[])
    
    setData(dataWithHref)
    
  },[params])
  
  if (data) {
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
        href: '/encyclopedia/bestiary'
      },
      {
        label: data[0].family,
      }
    ]
    return <>
      <BannerContainer>
        <Banner label={data[0].family} pathsList={pathsList}/>
      </BannerContainer>
      <MenuContainer>
        <Menu data={data}/>
      </MenuContainer>
    </> 
  }
}

MonsterFamily.propTypes = {
  params: PropTypes.shape({
    monsterFamily: PropTypes.string
  })
}

export default MonsterFamily;
