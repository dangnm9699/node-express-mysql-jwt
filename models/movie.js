const knex = require("../db");

const Movie = function (movie) {
  this.tconst = movie.tconst;
  this.name = movie.name;
  this.duration = movie.duration;
  this.date = movie.date;
  this.description = movie.description;
};

Movie.paginate = async (page, perPage) => {
  return knex("movies").paginate({
    perPage: perPage,
    currentPage: page,
    isLengthAware: true,
  });
};

Movie.findById = async (uuid) => {
  return knex("movies").whereNot("activated", false).where("id", uuid).first();
};

Movie.findAll = async () => {
  return knex("movies").whereNot("activated", false).select("*");
};

Movie.updateById = async (uuid, updatedMovie) => {
  return knex("movies")
    .whereNot("activated", false)
    .where("id", uuid)
    .update(updatedMovie);
};

Movie.remove = async (uuid) => {
  return knex("movies").whereNot("activated", false).where("id", uuid).del();
};

Movie.create = async (newMovie) => {
  return knex("movies").insert({
    tconst: newMovie.tconst,
    name: newMovie.name,
    duration: newMovie.duration,
    date: newMovie.date,
    description: newMovie.description,
  });
};

module.exports = Movie;
