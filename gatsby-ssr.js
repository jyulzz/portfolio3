/*-----------------------------------------------------------------------------*

FILE
/gatsby-ssr.js

DESCRIPTION
The file gatsby-ssr.js lets you alter the content of static HTML files as they are being Server-Side Rendered (SSR) by Gatsby and Node.js. To use the Gatsby SSR APIs, create a file called gatsby-ssr.js in the root of your site. Export any of the APIs you wish to use in this file.

READ MORE
https://www.gatsbyjs.org/docs/api-files-gatsby-ssr/

*-----------------------------------------------------------------------------*/

/*
FOUC prevention
*/
exports.onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
    className: "no-js",
  });
};
