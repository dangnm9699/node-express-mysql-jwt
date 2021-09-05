exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("movies")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("movies").insert([
        { tconst: "tt4154796", name: "Avengers: Endgame", duration: 181 },
        {
          tconst: "tt4154756",
          name: "Avengers: Infinity War",
          duration: 149,
          description:
            "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain.",
        },
        { tconst: "tt0848228", name: "The Avengers" },
        {
          tconst: "tt2395427",
          name: "Avengers: Age of Ultron",
          released_date: "2015-05-01",
        },
      ]);
    });
};
