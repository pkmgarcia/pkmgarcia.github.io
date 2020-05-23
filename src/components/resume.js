/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Resume = () => {
  const data = useStaticQuery(graphql`
    query {
      allEducationJson {
        edges {
          node {
            name
            degree
            description
          }
        }
      }
      allWorkExperienceJson {
        edges {
          node {
            company
            role
            points
          }
        }
      }
      allProjectsJson {
        edges {
          node {
            name
            role
            points
          }
        }
      }
    }
  `);

  const educationItems = data.allEducationJson.edges.map(({ node }) => ({
    ...node,
  }));
  const workExperienceItems = data.allWorkExperienceJson.edges.map(
    ({ node }) => ({
      ...node,
    })
  );
  const projectsItems = data.allProjectsJson.edges.map(({ node }) => ({
    ...node,
  }));

  return (
    <div>
      <section>
        <h4>Education</h4>
        {educationItems.map(({ name, degree, description }, index) => (
          <React.Fragment key={index}>
            <p>
              <strong>{name}</strong> - <i>{degree}</i>
            </p>
            <p>{description}</p>
          </React.Fragment>
        ))}
      </section>
      <section>
        <h4>Work Experience</h4>
        {workExperienceItems.map(({ company, role, points }, index) => (
          <React.Fragment key={index}>
            <p>
              <strong>{company}</strong> - <i>{role}</i>
            </p>
            <ul>
              {points.map((point, index) => (
                <li key={index}>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </section>
      <section>
        <h4>Projects</h4>
        {projectsItems.map(({ name, role, points }, index) => (
          <React.Fragment key={index}>
            <p>
              <strong>{name}</strong> - <i>{role}</i>
            </p>
            <ul>
              {points.map((point, index) => (
                <li key={index}>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </section>
    </div>
  );
};

export default Resume;
