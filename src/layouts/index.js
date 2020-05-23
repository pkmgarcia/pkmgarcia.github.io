import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

// Set a max-width for content that user should be focused on
const contentMaxWidth = "1280px";

const LayoutContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;

  min-height: 100vh;

  align-items: stretch;
`;

const HeaderContainer = styled.div`
  flex: none;
`;

const ContentContainer = styled.div`
  flex: auto;

  margin: 0 32px;
  padding: 0 calc((100vw - ${contentMaxWidth}) / 2);
`;

const FooterContainer = styled.div`
  flex: none;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle = data.site.siteMetadata.title;

  return (
    <LayoutContainer>
      <SEO title={siteTitle} />
      <HeaderContainer>
        <Header title={siteTitle} />
      </HeaderContainer>
      <ContentContainer>
        <main>{children}</main>
      </ContentContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </LayoutContainer>
  );
};

export default Layout;
