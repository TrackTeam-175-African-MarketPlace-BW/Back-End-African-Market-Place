exports.seed = function (knex) {

  return knex("markets").then(function () {
    // Inserts seed entries
    return knex("markets").insert([
      { id: 1, market: "Bungoma", country_id: 1 },
      { id: 2, market: "Busia", country_id: 1 },
      { id: 3, market: "Eldoret", country_id: 2 },
      { id: 4, market: "Embu", country_id: 2 },
      { id: 5, market: "Garisa", country_id: 3 },
      { id: 6, market: "Isiolo", country_id: 3 },
      { id: 7, market: "Kajiado", country_id: 4 },
      { id: 8, market: "kakamega", country_id: 4 },
      { id: 9, market: "Kisii", country_id: 5 },
      { id: 10, market: "Kisumu", country_id: 5 },
      { id: 11, market: "Kitale", country_id: 1 },
      { id: 12, market: "Kitui", country_id: 2 },
      { id: 13, market: "Loitoktok", country_id: 3 },
    ]);
  });
};
