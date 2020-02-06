import React from 'react';
import styled from 'styled-components';
import {Section} from '../components/Section';

const ContactWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export function Contact(props) {
  return (
    <Section
      title="Contacto"
      subtitle="
      Ipsum atque ipsa cum quas dicta! Placeat perspiciatis laborum repellendus beatae voluptates optio Accusantium modi eos sit similique accusamus consectetur distinctio.
">
      <ContactWrapper>hola</ContactWrapper>
    </Section>
  );
}
