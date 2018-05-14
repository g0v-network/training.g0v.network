/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onRouteUpdate = ({location}) => {
  if (location.hash) {
    console.log(location.hash)
      document.querySelector("about").addEventListener('click', function (e) { //say this is an anchor
        //do something
        e.preventDefault();
        // scrollIntoView()
      });

  }
};