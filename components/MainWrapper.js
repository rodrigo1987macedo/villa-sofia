import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Font from './Font';

const FontLoader = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 200;
`;

const Content = styled.div`
  > div:nth-child(odd) {
    background-color: #ededed;
  }
  > div:nth-child(even) {
    background-color: #e1e1e1;
  }
  > div:nth-child(1) {
    background-color: #313131;
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
      title = 'Villa Sofía - Residencial para adultos en Montevideo, Uruguay',
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
          <link
            href="https://fonts.googleapis.com/css?family=Pacifico&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Pacifico|Roboto&display=swap"
            rel="stylesheet"
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
