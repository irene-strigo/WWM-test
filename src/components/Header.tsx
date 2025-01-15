import NavigationButton from './NavigationButton';
import {
  HeaderButtonsContainer,
  HeaderLogoImg,
  HeaderLogoLink,
  HeaderWrapper,
} from './CommonStyles';
import BurgerButton from './BurgerButton';
import BurgerComponent from './BurgerComponent';

import { useState } from 'react';

export type Button = {
  id: number;
  link: string;
  label: string;
};
export const headerButtons: Button[] = [
  { id: 1, link: '/main', label: 'Pagina inicial' },
  { id: 2, link: '/privacy', label: 'Política de Privacidade' },
  { id: 3, link: '/blog', label: 'Blog' },
];
const Header = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  function processBurger() {
    return isBurgerOpen ? setBurgerOpen(false) : setBurgerOpen(true);
  }

  return (
    <HeaderWrapper>
      <HeaderLogoLink to="/main">
        <HeaderLogoImg src="/assets/images/logo.avif"></HeaderLogoImg>
      </HeaderLogoLink>

      <HeaderButtonsContainer>
        {headerButtons.map((button) => (
          <NavigationButton key={button.id} link={button.link} label={button.label} />
        ))}
      </HeaderButtonsContainer>

      {isBurgerOpen && (
        <>
          <BurgerComponent
            isOpen={isBurgerOpen}
            onClick={() => {
              setBurgerOpen(false);
            }}
          ></BurgerComponent>
        </>
      )}
      <BurgerButton
        sign={isBurgerOpen ? <>&times;</> : <>&equiv;</>}
        isOpen={false}
        onClick={() => {
          processBurger();
        }}
      ></BurgerButton>
      <HeaderLogoImg src="/assets/images/18.svg"></HeaderLogoImg>
    </HeaderWrapper>
  );
};

export default Header;
