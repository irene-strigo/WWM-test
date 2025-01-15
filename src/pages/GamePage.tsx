//import React, { useState } from 'react';
import { PageWrapper } from './PagesStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';

import 'react-responsive-modal/styles.css';
import { TextCentered } from '../components/CommonStyles';

const GamePage = () => {
  return (
    <PageWrapper>
      <Header />
      <TextCentered>
        <iframe
          src="https://esporte-br77.com/game-dir/index.html"
          width="1280"
          height="620"
        ></iframe>
      </TextCentered>
      <Footer />
    </PageWrapper>
  );
};

export default GamePage;
