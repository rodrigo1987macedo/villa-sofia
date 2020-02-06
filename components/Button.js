import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #cae8c2;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  color: black;
  cursor: pointer;
  > img {
    width: 12px;
    margin: 0 8px 0 0;
  }
  > a {
    display: flex;
    text-decoration: none;
    color: inherit;
    > img {
      width: 12px;
      margin: 0 8px 0 0;
    }
  }
`;

export function Button(props) {
  return <ButtonWrapper>{props.children}</ButtonWrapper>;
}
