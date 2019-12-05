import React from "react";
import styled from "styled-components";
import { prop } from "styled-tools";

// include global css with normalize.css reset
import { GlobalStyle } from "$shared/styles/global.css.js";

const LayoutStyled = styled.div`
  background-color: ${prop("theme.colors.bluePrimary")};
  color: ${prop("theme.colors.yellowPrimary")};
`;

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <GlobalStyle />
      {children}
    </LayoutStyled>
  );
};

export default Layout;
