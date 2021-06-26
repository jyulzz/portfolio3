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
