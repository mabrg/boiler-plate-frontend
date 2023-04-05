export const ROUTES_IDS = {
    HOME: 'home',
    TAB: 'tableau',
    ADD_CREDIT_CONSENT: 'addCreditConsent',
  };
  
  const config = {
    apidaeVersion: 'v0',
    // assetsBaseUrl: ASSETS_BASE_URL,
    routes: {
      [ROUTES_IDS.HOME]: {
        path: '/',
        title: 'Accueil',
      },
      [ROUTES_IDS.TAB]: {
        path: '/tableau',
        title: 'Tableau',
        parent: ROUTES_IDS.HOME,
      },
    },
  };
  
  export default config;