'use client';

import monsters from "@/app/data/monsters";
import PropTypes from 'prop-types';
import Grid from "@/components/Grid";
import Banner from "@/components/Banner";
import { GridContainer, BannerContainer } from "./styled";

import { useEffect, useState } from "react";

const Monster = ({params}) => {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    setData(monsters.find(monster => monster.slug === params.monster))
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
        label: data.family,
        href: `/encyclopedia/bestiary/${params.monsterFamily}`
      },
      {
        label: data.name,
      }
    ]
    return <>
      <BannerContainer>
        <Banner imgSrc={data.img} label={data.name} pathsList={pathsList}/>
      </BannerContainer>
      <GridContainer>
        <Grid boardSize={10} squaresSize={50} spells={data.spells}/>
      </GridContainer>
    </>
  }
}

Monster.propTypes = {
  params: PropTypes.shape({
    monsterFamily: PropTypes.string,
    monster: PropTypes.string
  })
}

export default Monster;
