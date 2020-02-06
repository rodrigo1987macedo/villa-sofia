import React from 'react';
import styled from 'styled-components';
import {Section} from '../components/Section';

const ServicesWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px 40px 0 40px;
  @media (min-width: 1120px) {
    padding: 0 40px;
  }
`;

const ServicesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  margin: 20px 3vw;
  background: whitesmoke;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const ServicesImage = styled.img`
  height: 60px;
  margin: 20px 0;
  opacity: 0.5;
  @media (min-width: 1440px) {
    height: 4vw;
  }
`;

const ServicesTitle = styled.div`
  font-size: 18px;
  text-align: center;
  width: 120px;
`;

const ServicesDescription = styled.div`
  font-size: 16px;
  line-height: 24px;
  width: 140px;
  text-align: center;
`;

export function Services(props) {
  return (
    <Section
      title="Servicios"
      subtitle="Gracias a las pocas plazas, damos una atención personalizada 
creando un ambiente distinto a los demás hogares">
      <ServicesWrapper>
        {Object.keys(props.services).map((item, index) => (
          <ServicesBox key={item}>
            <ServicesTitle>{item}</ServicesTitle>
            <ServicesImage
              src={Object.values(props.services)[index][1] + '.svg'}
              alt={item}
            />
            <ServicesDescription>
              {Object.values(props.services)[index][0]}
            </ServicesDescription>
          </ServicesBox>
        ))}
      </ServicesWrapper>
    </Section>
  );
}
