export const siteConfig = {
  url: "https://www.eltingladodetailing.com",
  routes: {
    home: "/",
    privacy: "/politica-de-privacidad/",
    terms: "/terminos-y-condiciones/",
  },
};

export const sitePages = [
  {
    input: "index.html",
    name: "home",
    route: siteConfig.routes.home,
  },
  {
    input: "politica-de-privacidad/index.html",
    name: "privacy",
    route: siteConfig.routes.privacy,
  },
  {
    input: "terminos-y-condiciones/index.html",
    name: "terms",
    route: siteConfig.routes.terms,
  },
];
