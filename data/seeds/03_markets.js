exports.seed = function (knex) {
  return knex("markets").then(function () {
    // Inserts seed entries
    return knex("markets").insert([
      { id: 1, market: "Bungoma" },
      { id: 2, market: "Busia" },
      { id: 3, market: "Eldoret" },
      { id: 4, market: "Embu" },
      { id: 5, market: "Garisa" },
      { id: 6, market: "Isiolo" },
      { id: 7, market: "Kajiado" },
      { id: 8, market: "kakamega" },
      { id: 9, market: "Kisii" },
      { id: 10, market: "Kisumu" },
      { id: 11, market: "Kitale" },
      { id: 12, market: "Kitui" },
      { id: 13, market: "Loitoktok" },
    ]);
  });
};
