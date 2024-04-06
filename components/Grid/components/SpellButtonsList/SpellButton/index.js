'use client';

import Spell from '@/public/spell.webp'
import styled from "styled-components";

const SpellIcon = styled.div`
  background-image: url(${Spell.src});
  background-size: contain;
  width: 50px;
  height: 50px;
`

const SpellLabel = styled.p`
  display: flex;
  align-items: center;
  margin-left: 10px;
  text-transform: capitalize;
  font-weight: 600;
`

const SpellButtonContainer = styled.div`
  ${({$isSelected}) => `
    display: flex;
    padding: 5px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.8);
    &:hover {
      filter: sepia(1);
    }
    filter: ${$isSelected ? 'sepia(1);' : ''}
  `}
`

const SpellButton = ({spell, selectedSpell, setSelectedSpell}) => {
  const isSelected = spell.name === selectedSpell?.name;

  return <SpellButtonContainer $isSelected={isSelected} key={spell.name} onClick={() => setSelectedSpell((prev) => prev === null || prev?.name !== spell.name ? spell : null)}>
  <SpellIcon/>
  <SpellLabel>{spell.name}</SpellLabel>
</SpellButtonContainer>
}

export default SpellButton;
