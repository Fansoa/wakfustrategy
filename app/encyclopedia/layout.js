'use client';

import { Container, Copyright } from './styled';

const EncyclopediaLayout = ({children}) => {
  return (
    <Container>
        {children}
      <Copyright>
        WAKFU MMORPG : © 2024 Ankama Studio. Tous droits réservés. "WakfuStrategy" et ses services dérivés sont des sites non-officiels sans aucun lien avec Ankama.
      </Copyright>
    </Container>
  )
}

export default EncyclopediaLayout;
