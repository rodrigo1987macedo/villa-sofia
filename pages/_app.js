import React from 'react';
import GlobalStyle from '../styles/globalStyle';

function MyApp({Component, pageProps}) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
