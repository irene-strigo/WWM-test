import React from 'react';
import { FooterWrapper, PageBlockContainer, TextContainer } from './CommonStyles';
import Header from './Header';

const Footer = () => {
  return (
    <PageBlockContainer>
      <FooterWrapper>
        <Header />
        <TextContainer>
          Esporte-br77.com é um inovador cassino online gratuito que convida você a um mundo de
          entretenimento emocionante de jogos de azar. Aqui você pode jogar seus jogos de azar
          favoritos, sentir a adrenalina da vitória e desfrutar de emocionantes momentos de emoção,
          tudo sem nenhum risco financeiro. Garantimos-lhe uma experiência viva e um ambiente
          alegre, para que possa desfrutar do jogo com total dedicação à diversão, sem se preocupar
          com dinheiro.
        </TextContainer>
      </FooterWrapper>
    </PageBlockContainer>
  );
};

export default Footer;
