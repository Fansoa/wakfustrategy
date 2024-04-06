'use client';

import PropTypes from 'prop-types';
import styled from "styled-components";

import SpellButton from './SpellButton';

const SpellButtonListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const SpellButtonsList = ({spells, selectedSpell, setSelectedSpell}) => {
  return <SpellButtonListContainer>
    {spells.map(spell => <SpellButton key={spell.name} spell={spell} selectedSpell={selectedSpell} setSelectedSpell={setSelectedSpell}/>)}
  </SpellButtonListContainer>
}

SpellButtonsList.propTypes = {
  spells: PropTypes.arrayOf(PropTypes.shape({})),
  selectedSpell: PropTypes.shape({}),
  setSelectedSpell: PropTypes.func,
}

export default SpellButtonsList;
