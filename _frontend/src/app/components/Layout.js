import React from "react";
import styled from "styled-components";
import { prop } from "styled-tools";

import theme from "$shared/styles/theme";

// include global css with normalize.css reset
import { GlobalStyle } from "$shared/styles/global.css.js";

const LayoutStyled = styled.div`
  background-color: ${prop("theme.colors.bluePrimary")};
  color: ${prop("theme.colors.yellowPrimary")};
`;

const Layout = () => {
  return (
    <LayoutStyled>
      <GlobalStyle />
      {this.props.children}
    </LayoutStyled>
  );
};

export default Layout;
