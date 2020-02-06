import styledNormalize from 'styled-normalize';
import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
${styledNormalize}
html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
  }
`;

export default GlobalStyle;
