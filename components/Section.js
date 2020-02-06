import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 60px 40px;
  overflow: hidden;
  @media (min-width: 1120px) {
    height: 100vh;
  }
  @media (min-width: 1441px) {
    padding: 7vw 2vw;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 48px;
  margin: 0 0 18px 0;
`;

const Subtitle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  max-width: 460px;
  @media (min-width: 1441px) {
    margin: 0 0 6vw 0;
  }
`;

export function Section(props) {
  return (
    <SectionWrapper>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
      {props.children}
    </SectionWrapper>
  );
}
