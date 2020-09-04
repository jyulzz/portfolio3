/*-----------------------------------------------------------------------------*

FILE
/gatsby-node.js

DESCRIPTION
Code in the file gatsby-node.js is run once in the process of
building your site. You can use it to create pages dynamically, add nodes
in GraphQL, or respond to events during the build lifecycle.
To use the Gatsby Node APIs, create a file named gatsby-node.js in the root
of your site. Export any of the APIs you wish to use in this file.

READ MORE
https://www.gatsbyjs.org/docs/api-files-gatsby-node/

*-----------------------------------------------------------------------------*/

/*
About 'Path' : https://nodejs.org/docs/latest/api/path.html
*/
const path = require(`path`);
/*

About 'Slash' : https://www.npmjs.com/package/slash
*/
const slash = require(`slash`);

/*
Query Contentful for Project entries using GraphQL.
For each Project entry found in Contentful, create a project page using
'/src/templates/project.js' as a template.
*/
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allContentfulProject(filter: { released: { eq: true } }) {
          edges {
            next {
              slug
              title
            }
            node {
              id
              slug
              title
              description {
                description
              }
              subtitle
              imagePreview {
                id
                file {
                  url
                }
              }
              content {
                json
              }
              inProgress
            }
            previous {
              title
              slug
            }
          }
        }
      }
    `
  ).then((result) => {
    const projectTemplate = path.resolve("./src/pages/project.js");
    result.data.allContentfulProject.edges.forEach((edge) => {
      /*
        If a Project node has no 'previous' or 'next', create an artificial
        'next' or 'previous' to make sure the previous... and next... properties
        in 'createPage({...,context:'' will not be undefined.
        */
      if (edge.previous === null) {
        edge.previous = {
          title: null,
          slug: null,
        };
      }
      if (edge.next === null) {
        edge.next = {
          title: null,
          slug: null,
        };
      }

      /*
        Page creation function. All data used in 'projectTemplate' is passsed
        throught 'context'.
        */
      createPage({
        path: `/work/${edge.node.slug}/`,
        component: slash(projectTemplate),
        context: {
          slug: edge.node.slug,
          id: edge.node.id,
          title: edge.node.title,
          subtitle: edge.node.subtitle,
          imagePreview: edge.node.imagePreview.file.url,
          content: edge.node.content.json,
          description: edge.node.description.description,
          previousProjectSlug: edge.previous.slug,
          previousProjectTitle: edge.previous.title,
          nextProjectSlug: edge.next.slug,
          nextProjectTitle: edge.next.title,
          inProgress: edge.node.inProgress,
        },
      });
    });
  });
};
