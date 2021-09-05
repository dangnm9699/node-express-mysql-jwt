const MovieRouter = require("express").Router();
const MovieController = require("../controllers/movie");

MovieRouter.get("/", MovieController.findAll);

module.exports = MovieRouter;
