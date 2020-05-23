import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import PaddedContainer from "./core/padded-container";

const routes = [
  { title: "Home", path: "/" },
  { title: "Resume", path: "/resume" },
];

const TabsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  & > * {
    margin-right: 1.25em;
  }
`;

const Header = ({ title }) => {
  return (
    <header>
      <PaddedContainer>
        <h1>{title}</h1>
        <TabsContainer>
          {routes.map(({ title: routeTitle, path }, index) => (
            <Link key={index} to={path}>
              {routeTitle}
            </Link>
          ))}
        </TabsContainer>
      </PaddedContainer>
    </header>
  );
};

export default Header;
