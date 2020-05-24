import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Section = styled.section`
  text-align: center;
`;

const TechnologyList = styled.ul`
  display: flex;
  flex-flow: row wrap;

  padding-left: 0;
  justify-content: center;
`;

const TechnologyListItem = styled.li`
  list-style: none;
  margin-right: 1.25em;
`;

const Home = () => {
  return (
    <section>
      <Section>
        <h2>Hello.</h2>
        <p>This is a simple website about my professional career.</p>
      </Section>
      <Section>
        <h2>Here are some technologies I often use.</h2>
        <TechnologyList>
          <TechnologyListItem>React</TechnologyListItem>
          <TechnologyListItem>Flask</TechnologyListItem>
          <TechnologyListItem>Postgres</TechnologyListItem>
        </TechnologyList>
      </Section>
      <Section>
        <h2>Here is more information about me.</h2>
        <Link to="resume">Resume</Link>
      </Section>
    </section>
  );
};

export default Home;
