const Movie = require("../models/movie");

const MovieController = {};

MovieController.findAll = async (req, res) => {
  try {
    let results = await Movie.findAll();
    res.status(200).json({
      error: false,
      data: results,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: true,
      message: "Error while retrieving movies",
    });
  }
};

module.exports = MovieController;
