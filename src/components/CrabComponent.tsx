import {
  BackgroundContainer,
  TextContainer,
  BigHeading,
  SmallTextContainer,
  BoldTextSpan,
  AgeSign,
} from './CommonStyles';

const CrabComponent = () => {
  return (
    <BackgroundContainer>
      <TextContainer>
        <BigHeading>
          Diversão em jogos inteligentes: Jogos para entretenimento online para adultos a partir dos
          18 anos!
        </BigHeading>

        <SmallTextContainer>
          Estamos empenhados em garantir que a nossa posição de jogo se baseia num sistema de
          verificação robusto que proporciona uma verificação segura da idade aos nossos clientes.
          Este é um princípio fundamental que define a nossa abordagem para a criação de serviços de
          jogo seguros, pois acreditamos fortemente que os jogos só devem ser acedidos por adultos
          responsáveis conscientes. Acreditamos firmemente que o jogo responsável não consiste
          apenas em seguir as regras, mas também em mostrar cuidado e atenção aos nossos clientes.
          <p>
            <BoldTextSpan>
              18+ www.gamblingtherapy.org - Gambling Therapy é um serviço de apoio on-line mundial
              que oferece aconselhamento a pessoas que foram afetadas negativamente pelo jogo.
            </BoldTextSpan>
          </p>
          <p>
            {' '}
            <BoldTextSpan>
              {' '}
              www.gamblersanonymous.org/ga - Jogadores Anônimos oferece aconselhamento por telefone
              ou pessoalmente a qualquer pessoa afetada pelo jogo.
            </BoldTextSpan>{' '}
          </p>{' '}
        </SmallTextContainer>
        <AgeSign src="/assets/images/18.svg" />
      </TextContainer>
    </BackgroundContainer>
  );
};

export default CrabComponent;
