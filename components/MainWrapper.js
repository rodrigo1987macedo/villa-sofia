import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Font from './Font';

const FontLoader = styled.div`
  font-family: Roboto;
  font-weight: 200;
`;

const Content = styled.div`
  > div:nth-child(odd) {
    background-color: #ededed;
  }
  > div:nth-child(even) {
    background-color: #e1e1e1;
  }
  > div:first-child {
    background-color: none;
  }
  > div:nth-child(2),
  > div:nth-child(3) {
    background-image: url('gradient1.png');
    background-size: cover;
  }
`;

class MainWrapper extends React.Component {
  componentDidMount() {
    Font();
  }
  render() {
    const {
      children,
      title = 'Villa Sofía - Residencial para adultos',
      description = 'Residencial para adultos',
    } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          }} />
        </Head>
        <FontLoader>
          <Content>{children}</Content>
        </FontLoader>
      </React.Fragment>
    );
  }
}

export default MainWrapper;
