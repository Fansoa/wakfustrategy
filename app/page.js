'use client';

import { PageContainer, Modal, StyledLink, Copyright, Title, Description } from "./styled";

export default function Home() {
  return (
    <PageContainer>
      <Modal>
        <Title>Bienvenue sur Wakfu Strategy</Title>
        <Description>Votre guide ultime pour progresser dans l'aventure Wakfu. Trouvez des informations sur les monstres du jeu pour améliorer votre expérience de jeu.</Description>
        <StyledLink href={'/encyclopedia'}>Retrouvez votre Encyclopédie ici</StyledLink>
      </Modal>
      <Copyright>
        WAKFU MMORPG : © 2024 Ankama Studio. Tous droits réservés. "WakfuStrategy" et ses services dérivés sont des sites non-officiels sans aucun lien avec Ankama.
      </Copyright>
    </PageContainer>
  );
}
