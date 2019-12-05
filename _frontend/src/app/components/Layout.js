import React from "react";
import styled from "styled-components";
import { prop } from "styled-tools";
import { TypographyStyle, GoogleFont } from "react-typography";

// include global css with normalize.css reset
import { GlobalStyle } from "$shared/styles/global.css.js";
//
import typography from "$shared/styles/typography";

const LayoutStyled = styled.div`
  background-color: ${prop("theme.colors.background")};
  color: ${prop("theme.colors.primaryText")};
`;

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <GlobalStyle />
      {children}
    </LayoutStyled>
  );
};

export default Layout;
