exports.seed = function (knex) {

  return knex("markets_countries").then(function () {
    // Inserts seed entries
    return knex("markets_countries").insert([
      { market_id: 1,  country_id: 1 },
      { market_id: 2,  country_id: 1 },
      { market_id: 3,  country_id: 2 },
      { market_id: 4, country_id: 2 },
      { market_id: 5, country_id: 3 },
      { market_id: 6, country_id: 3 },
      { market_id: 7, country_id: 4 },
      { market_id: 8,  country_id: 4 },
      { market_id: 9, country_id: 5 },
      { market_id: 10, country_id: 5 },
      { market_id: 11, country_id: 1 },
      { market_id: 12, country_id: 2 },
      { market_id: 13, country_id: 3 },
    ]);
  });
};
