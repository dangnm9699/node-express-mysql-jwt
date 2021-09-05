const MovieRouter = require("./movie");

module.exports = (app) => {
  app.use("/movies", MovieRouter);
};
