const backendUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_BACKENDURL_PRODUCTION
    : process.env.REACT_APP_BACKENDURL_PRODUCTION;

export default backendUrl;
