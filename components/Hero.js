import React from 'react';
import styled from 'styled-components';
import {Button} from '../components/Button';

// TODO: resize hero-background.jpg

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url('/hero-background.jpg');
  background-size: cover;
  background-position: center;
  .pre-title {
    font-size: 24px;
    margin: 0 0 14px 0;
    color: #e0e0e0;
  }
  .title {
    font-family: 'Pacifico', cursive;
    font-size: 65px;
    color: #c5e5f4;
    margin: 0 0 40px 0;
    @media (min-width: 1120px) {
      font-size: 100px;
    }
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 20px 0;
  > div:nth-child(1) {
    margin: 0 0 4px 0;
  }
  > div:nth-child(3) {
    margin: 4px 0 0 0;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  > div:nth-child(3) {
    font-size: 12px;
  }
`;

const WhatsApp = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-auto-flow: column;
`;

export function Hero(props) {
  return (
    <HeroWrapper>
      <div className="pre-title">{props.pretitle}</div>
      <div className="title">{props.title}</div>
      <ContactWrapper>
        <Contact>
          <div>WhatsApp</div>
          <WhatsApp>
            <Button>
              <a href="https://api.whatsapp.com/send?phone=59894975419">
                <img src="whatsapp.svg" alt="whatsapp" />
                094 975 419
              </a>
            </Button>
            <Button>
              <a href="https://api.whatsapp.com/send?phone=59899389635">
                <img src="whatsapp.svg" alt="whatsapp" />
                099 389 635
              </a>
            </Button>
          </WhatsApp>
        </Contact>
        <Contact>
          <div>E-mail</div>
          <Button>
            <img src="mail.svg" alt="mail" />
            <a href="mailto:villasofiagm@gmail.com">villasofiagm@gmail.com</a>
          </Button>
        </Contact>
        <div>Haz click para enviar</div>
      </ContactWrapper>
    </HeroWrapper>
  );
}
