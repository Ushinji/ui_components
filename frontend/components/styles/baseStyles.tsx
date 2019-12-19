import * as React from 'react';
import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GrobalStyle = createGlobalStyle`
  ${styledNormalize}
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, YuGothic, "Yu Gothic", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Hiragino Kaku Gothic Pro", Meiryo, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  /* IE8〜11 */
  @media screen\0 {
    body {
      font-family: 'Segoe UI', Meiryo, sans-serif;
    }
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  input, button, textarea, select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

interface Props {
  children: React.ReactNode;
}

const BaseStyles: React.FC<Props> = ({ children }) => {
  return (
    <>
      <GrobalStyle />
      {children}
    </>
  );
};

export default BaseStyles;
