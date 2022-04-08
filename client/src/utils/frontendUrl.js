const frontendUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_FRONTEND_PRODUCTION
    : process.env.REACT_APP_FRONTEND;

export default frontendUrl;
