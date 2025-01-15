import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PageWrapper } from './PagesStyles';
import CrabComponent from '../components/CrabComponent';
import {
  BigHeading,
  H2Heading,
  PageBlockContainer,
  SmallTextContainer,
  TextContainer,
} from '../components/CommonStyles';

const PrivacyPage = () => {
  return (
    <PageWrapper>
      <PageBlockContainer>
        {' '}
        <Header />
      </PageBlockContainer>
      <TextContainer>
        <BigHeading>política de Privacidade</BigHeading>
        <H2Heading>Coleta de informações pessoais</H2Heading>
        <SmallTextContainer>
          Coletamos diferentes tipos de informações pessoais sobre você quando você usa nosso site,
          incluindo:
        </SmallTextContainer>
        <SmallTextContainer>
          Informações que você nos fornece: podem incluir seu nome, endereço de e-mail, número de
          telefone, informações demográficas e outros dados que você nos fornece ao se registrar em
          nosso site, criar uma conta, jogar ou entrar em contato com o atendimento ao cliente.
          Informações que coletamos automaticamente: Quando você usa nosso site, coletamos
          automaticamente certas informações sobre seu dispositivo e sua atividade, incluindo seu
          endereço IP, tipo de navegador, sistema operacional, data e hora de sua visita, páginas
          que você visualiza e as ações que você realiza. Em nosso site. Informações de cookies e
          outras tecnologias de rastreamento: Usamos cookies e outras tecnologias de rastreamento
          para coletar informações sobre sua atividade em nosso Site. Usamos cookies para diversos
          fins, incluindo melhorar sua experiência de usuário, rastrear sua atividade em nosso Site
          e fornecer-lhe informações direcionadas. anúncio.
        </SmallTextContainer>

        <H2Heading>Uso de informações pessoais</H2Heading>
        <SmallTextContainer>
          Usamos suas informações pessoais para os seguintes fins:
        </SmallTextContainer>
        <SmallTextContainer>
          Fornecimento e melhoria dos nossos serviços: Utilizamos as suas informações pessoais para
          lhe fornecer os nossos serviços, incluindo acesso aos jogos, processamento das suas
          apostas e pagamento dos seus ganhos. Também utilizamos suas informações pessoais para
          melhorar nossos serviços e desenvolver novos recursos e produtos. Entrando em contato com
          você: Poderemos usar suas informações pessoais para contatá-lo sobre sua conta, nossos
          serviços ou outros fins relacionados ao nosso negócio. Personalização da sua experiência:
          Podemos usar suas informações pessoais para personalizar sua experiência em nosso Site,
          inclusive para fornecer recomendações e ofertas de jogos direcionadas.
          <p>
            Publicidade: Podemos usar suas informações pessoais para mostrar publicidade direcionada
            em nosso site e em outros sites. Finalidades de pesquisa: Podemos usar suas informações
            pessoais para fins de pesquisa para entender melhor nossos usuários e melhorar nossos
            serviços.
          </p>
        </SmallTextContainer>
        <H2Heading>Divulgação de informações pessoais</H2Heading>
        <SmallTextContainer>
          Poderemos divulgar suas informações pessoais a terceiros nos seguintes casos:
        </SmallTextContainer>
        <SmallTextContainer>
          Provedores de serviços: podemos divulgar suas informações pessoais a terceiros que nos
          prestam serviços, como processamento de pagamentos, atendimento ao cliente e marketing.
          Requisitos legais: Poderemos divulgar suas informações pessoais se formos obrigados a
          fazê-lo por lei ou por um mandado legal ou ação legal. Proteção dos nossos direitos:
          Poderemos divulgar as suas informações pessoais se acreditarmos que é necessário para
          proteger os nossos direitos ou propriedade.
        </SmallTextContainer>
        <H2Heading>Armazenamento e proteção de suas informações pessoais</H2Heading>
        <SmallTextContainer>
          Tomamos medidas para proteger suas informações pessoais contra acesso, uso, divulgação,
          alteração ou destruição não autorizados. Retemos as suas informações pessoais apenas
          durante o tempo necessário para cumprir os fins para os quais foram recolhidas ou para
          cumprir as nossas obrigações legais.
        </SmallTextContainer>
      </TextContainer>
      <CrabComponent />
      <Footer />
    </PageWrapper>
  );
};

export default PrivacyPage;
