'use client';

import { FamilyMonsterListContainer, StyledLink } from "./styled";

const FamilyMonsterList = () => {
  const familyMonster = [{ familySlug:'blops-musicaux', family: 'blops musicaux'}]
  return <FamilyMonsterListContainer>
    {familyMonster.map((elem, i) => <StyledLink key={`${elem.familySlug}-${i}`} href={`bestiary/${elem.familySlug}`}>{elem.family}</StyledLink>)}
  </FamilyMonsterListContainer>
}

export default FamilyMonsterList;
