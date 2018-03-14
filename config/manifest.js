/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "pulaar-dictionary-project",
    short_name: "pulaar-dictionary-project",
    description: "",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src:"/icons/icon-144x144.png",
        type:"image/png",
        sizes:"144x144"
      },
      {
        src:"/icons/icon-192x192.png",
        type:"image/png",
        sizes:"192x192"
      },
      {
        src:"/icons/icon-512x512.png",
        type:"image/png",
        sizes:"512x512"
      },
    ],
    ms: {
      tileColor: '#fff'
    }
  };
}
