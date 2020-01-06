module.exports = {
  app: {
    port: process.env.PORT,
    appName: process.env.APP_NAME || "logger",
    env: process.env.NODE_ENV || "development"
  }
};
