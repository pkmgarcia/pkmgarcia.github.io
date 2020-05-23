import React from "react";
import styled from "styled-components";

import PaddedContainer from "./core/padded-container";

// TODO: Change this
const alternateBackgroundColor = "black";
const alternateColor = "white";

const StyledFooter = styled.footer`
  background-color: ${alternateBackgroundColor};
  color: ${alternateColor};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <PaddedContainer>
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </PaddedContainer>
    </StyledFooter>
  );
};

export default Footer;
