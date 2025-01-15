import React, { useState } from 'react';

import Footer from '../components/Footer';
import { PageWrapper } from './PagesStyles';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import {
  AgeSign,
  BackgroundContainer,
  BigHeading,
  BoldTextSpan,
  FlexDiv,
  H2Heading,
  HeaderLogoImg,
  MerimadePicture,
  ModalInnerContainer,
  PageBlockContainer,
  PositionedSection,
  RightSideDiv,
  SeaPictureSection,
  SmallTextContainer,
  TextCentered,
  TextContainer,
} from '../components/CommonStyles';
import GameButtonComponent from '../components/GameButtonComponent';
import { Header } from '../components';
import ModalButton from '../components/ModalButton';
import CookiesAlertComponent from '../components/CookiesAlertComponent';

const MainPage = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const age = localStorage.getItem('age');
  const isCookies = document.cookie.indexOf('cookie_wwm') === 0;
  return (
    <PageWrapper onLoad={!age || !isCookies ? onOpenModal : onCloseModal}>
      <PageBlockContainer>
        <Header />
      </PageBlockContainer>
      <PageBlockContainer>
        <div>
          <Modal
            closeOnEsc={false}
            closeOnOverlayClick={false}
            showCloseIcon={false}
            open={open}
            onClose={onCloseModal}
            center
          >
            <ModalInnerContainer>
              <TextCentered>
                <h2>Você tem 18 anos ou mais?</h2>
                <HeaderLogoImg src="/assets/images/18.svg"></HeaderLogoImg>
                <FlexDiv>
                  <ModalButton
                    label="Sim, tenho 18 anos ou mais"
                    link="/main"
                    onClick={() => {
                      localStorage.setItem('age', 'true');
                      onCloseModal();
                    }}
                  />
                  <ModalButton
                    label="Não, tenho menos de 18 anos"
                    link="/privacy"
                    onClick={() => console.log('click')}
                  />
                </FlexDiv>
              </TextCentered>
            </ModalInnerContainer>
          </Modal>
        </div>
        <TextContainer>
          <BigHeading>
            Jogue de forma inteligente: diversão de cassino online para adultos maiores de 18 anos!
          </BigHeading>
          <AgeSign src="/assets/images/18.svg" />
          <SmallTextContainer>
            Em nossa empresa, estamos comprometidos não apenas em proporcionar diversão e
            entretenimento por meio de nossos jogos, mas também em capacitar nossos clientes a jogar
            em um ambiente seguro e responsável. Seguimos cuidadosamente regras internas e políticas
            rigorosas que visam a proteção e segurança dos nossos clientes. Através da melhoria
            constante e da aplicação dos métodos mais recentes, garantimos um jogo justo e
            transparente. Nosso principal objetivo é que cada um de nossos clientes aproveite a
            jogabilidade sem comprometer seu bem-estar físico e psicológico.
            <p>
              <BoldTextSpan>
                18+ www.gamblingtherapy.org – Gambling Therapy é um serviço de apoio on-line mundial
                que oferece aconselhamento a pessoas que foram afetadas negativamente pelo jogo.
              </BoldTextSpan>
            </p>
            <p>
              <BoldTextSpan>
                www.gamblersanonymous.org/ga – Jogadores Anônimos oferece aconselhamento por
                telefone ou pessoalmente a qualquer pessoa afetada pelo jogo.
              </BoldTextSpan>
            </p>
          </SmallTextContainer>
        </TextContainer>
      </PageBlockContainer>

      <PageBlockContainer>
        <PositionedSection>
          <MerimadePicture src="/assets/images/merimade.avif"></MerimadePicture>
          <RightSideDiv>
            <BigHeading>
              Junte-se a nós hoje e construa seu caminho para a vitória de graça!
            </BigHeading>
            <SmallTextContainer>
              Convidamos você para uma jornada emocionante em nosso cassino online social, onde
              infinitas oportunidades de emoção e ganhos incríveis esperam por você. Mergulhe na
              atmosfera emocional do jogo, sinta a adrenalina e aproveite cada momento desta
              emocionante jornada! Veja por si mesmo que os ganhos no nosso casino são uma realidade
              à sua espera!
            </SmallTextContainer>
          </RightSideDiv>
        </PositionedSection>
      </PageBlockContainer>
      <SeaPictureSection>
        <TextContainer>
          <TextCentered>
            <BigHeading>
              Mergulhe no mundo da pesca com Fish Slot: tente a sorte agora mesmo!
            </BigHeading>
            <SmallTextContainer>
              Mergulhe no emocionante mundo das profundezas do oceano com nosso novo jogo Fish Slot.
              Entre na equipe de pescadores experientes e vá caçar peixes grandes. O jogo
              impressiona com belos gráficos 3D, rodadas de bônus emocionantes e inúmeras opções de
              jogo totalmente gratuitas.
            </SmallTextContainer>
            <GameButtonComponent link={'/game'} label={'Jogo Grátis'} />
          </TextCentered>
        </TextContainer>
      </SeaPictureSection>
      <TextContainer>
        <TextCentered>
          <BigHeading>
            Teste sua experiência de cassino em nossa plataforma de jogos interativos: aproveite o
            jogo e ganhe!
          </BigHeading>
        </TextCentered>
      </TextContainer>
      <TextContainer>
        <PageBlockContainer>
          <FlexDiv>
            <SmallTextContainer>
              <TextCentered>
                <H2Heading>Modos bônus:</H2Heading>Fish Slot tem recursos de bônus exclusivos, como
                rodadas grátis, símbolos de expansão ou multiplicadores de vitória que ajudam a
                aumentar suas chances de ganhar.
              </TextCentered>
            </SmallTextContainer>
            <SmallTextContainer>
              <TextCentered>
                <H2Heading>Assunto fascinante:</H2Heading>O jogo Fish Slot foi desenhado com o tema
                da pesca, dando aos jogadores a oportunidade de desfrutar de um jogo divertido e
                interessante com seus personagens marinhos favoritos.
              </TextCentered>
            </SmallTextContainer>
            <SmallTextContainer>
              <TextCentered>
                <H2Heading>Interação social:</H2Heading>O jogo Fish Slot é muito popular entre os
                jogadores pela oportunidade de interagir com outros usuários, trocar impressões e
                experiências do jogo.
              </TextCentered>
            </SmallTextContainer>
          </FlexDiv>
        </PageBlockContainer>
      </TextContainer>
      <BackgroundContainer>
        <TextContainer>
          <BigHeading>
            Diversão em jogos inteligentes: Jogos para entretenimento online para adultos a partir
            dos 18 anos!
          </BigHeading>
          <SmallTextContainer>
            Estamos empenhados em garantir que a nossa posição de jogo se baseia num sistema de
            verificação robusto que proporciona uma verificação segura da idade aos nossos clientes.
            Este é um princípio fundamental que define a nossa abordagem para a criação de serviços
            de jogo seguros, pois acreditamos fortemente que os jogos só devem ser acedidos por
            adultos responsáveis e conscientes. Acreditamos firmemente que o jogo responsável não
            consiste apenas em seguir as regras, mas também em mostrar cuidado e atenção aos nossos
            clientes.
            <p>
              <BoldTextSpan>
                18+ www.gamblingtherapy.org - Gambling Therapy é um serviço de apoio on-line mundial
                que oferece aconselhamento a pessoas que foram afetadas negativamente pelo jogo.
              </BoldTextSpan>
            </p>
            <p>
              <BoldTextSpan>
                www.gamblersanonymous.org/ga - Jogadores Anônimos oferece aconselhamento por
                telefone ou pessoalmente a qualquer pessoa afetada pelo jogo.
              </BoldTextSpan>
            </p>
          </SmallTextContainer>
          <AgeSign src="/assets/images/18.svg" />
        </TextContainer>
      </BackgroundContainer>

      <Footer />
      <CookiesAlertComponent />
    </PageWrapper>
  );
};

export default MainPage;
