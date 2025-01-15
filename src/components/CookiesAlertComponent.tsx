import React, { useState } from 'react';
import {
  CookiesAlertContainer,
  FlexDiv,
  H2Heading,
  SmallTextContainer,
  TextContainer,
} from './CommonStyles';
import ModalButton from './ModalButton';

function setCookie() {
  document.cookie = `cookie_wwm=test; expires= 1 Jan 2026 00:00:00 UTC; path=/`;
}

const CookiesAlertComponent = () => {
  const [settings, setSettingsOpen] = useState(false);
  const [isVisible, setVisible] = useState(true);
  const isCookies = document.cookie.indexOf('cookie_wwm') === 0;
  return (
    <>
      {!isCookies && isVisible && (
        <CookiesAlertContainer>
          {!settings && (
            <TextContainer>
              <H2Heading>Cookie preferences</H2Heading>
              <SmallTextContainer>
                Discard all In order to properly provide services, as well as for statistical and
                advertising purposes, the website uses information stored on users' end devices
                (cookies). If you have allowed cookies to be stored in your browser settings, they
                will be stored on your end device. You can specify the conditions for storing or
                accessing cookies in your browser. Cookie Settings are available on every page of
                our website, where the user can at any time view the list of other companies that
                use cookies on this website and change their settings for these files. Detailed
                information about how we use your personal data and your rights can be found in our
                Privacy Policy.
              </SmallTextContainer>
              <FlexDiv>
                <ModalButton
                  link=""
                  label="Settings"
                  onClick={() => setSettingsOpen(true)}
                ></ModalButton>
                <ModalButton
                  link=""
                  label="Accept"
                  onClick={() => {
                    setCookie();
                    setVisible(false);
                  }}
                ></ModalButton>
                <ModalButton
                  link=""
                  label="Decline"
                  onClick={() => {
                    setVisible(false);
                  }}
                ></ModalButton>
              </FlexDiv>
            </TextContainer>
          )}
          {settings && (
            <TextContainer>
              <H2Heading>COOKIE SETTINGS</H2Heading>
              <SmallTextContainer>
                Cookies are small text files that may be used by websites so that users can use the
                websites more efficiently. The law states that we may store cookies on your device
                if this is necessary for the functioning of this website. For all other types we
                need user permission. This website uses different types of cookies. You can withdraw
                your consent at any time by clicking the "Cookie settings" link in the footer of the
                website. Find out more about who we are, how you can contact us and how we process
                data under the Privacy Policy.
              </SmallTextContainer>
              <h3>Functional</h3>
              <SmallTextContainer>
                Functional cookies enable us to remember choices you make such as your username,
                login details or language preferences, and to record any other customisations you
                make to the site during your visit.
              </SmallTextContainer>
              <input type="radio" />
              <h3>Analytical</h3>
              <SmallTextContainer>
                These cookies help us understand how visitors use our website. For example, they
                collect information about which pages on our website visitors choose most often,
                which features they use, and which pages they have previously visited. We use this
                information to improve our website and provide you with a better user experience.
              </SmallTextContainer>
              <input type="radio" />
              <ModalButton
                link=""
                label="Save settings"
                onClick={() => {
                  setCookie();
                  setVisible(false);
                }}
              ></ModalButton>
            </TextContainer>
          )}
        </CookiesAlertContainer>
      )}
    </>
  );
};

export default CookiesAlertComponent;
