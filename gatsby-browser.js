/*-----------------------------------------------------------------------------*

FILE
/gatsby-browser.js

DESCRIPTION
The file gatsby-browser.js lets you respond to actions within the browser,
and wrap your site in additional components.
The Gatsby Browser API gives you many options for interacting with the
client-side of Gatsby.

READ MORE
https://www.gatsbyjs.org/docs/api-files-gatsby-browser/

*-----------------------------------------------------------------------------*/

/*
FOUC prevention
*/

/*
Function that removes 'no-js' from body classes.
*/
function removeNoJsClass() {
  document.body.className = document.body.className.replace(/\bno-js\b/, "");
}

/*
Run removeNoJsClass at window.load
*/
exports.onClientEntry = () => {
  window.addEventListener("load", () => {
    removeNoJsClass();
  });
};

/*
Run removeNoJsClass after 3600ms in case of window.load issues
*/
setTimeout(removeNoJsClass, 3600);
