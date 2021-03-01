exports.up = function (knex) {
  return knex.schema
    .createTable("countries", (country) => {
      country.increments();
      country.string("country", 128).notNullable().unique();
    })
    .createTable("users", (user) => {
      user.increments();
      user.string("email", 128).notNullable().unique();
      user.string("password", 128).notNullable();
      user.string("name", 128);
      user.string("user_info");
      user.string("user_photo", 128);
      user
        .integer("country_id")
        .unsigned()
        .notNullable()
        .references("countries.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("categories", (category) => {
      category.increments();
      category.string("category", 128).notNullable().unique();
    })
    .createTable("markets", (market) => {
      market.increments();
      market.string("market", 128).notNullable();
    })
    .createTable("markets_countries", (tbl) => {
      tbl
        .integer("market_id")
        .unsigned()
        .notNullable()
        .references("markets.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("country_id")
        .unsigned()
        .notNullable()
        .references("countries.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.primary(["country_id", "market_id"]);
    })
    .createTable("items", (item) => {
      item.increments();
      item.string("name", 128).notNullable();
      item.string("description");
      item.decimal("price");
      item
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("users.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      item
        .integer("category_id")
        .unsigned()
        .notNullable()
        .references("categories.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      item
        .integer("market_id")
        .unsigned()
        .notNullable()
        .references("markets.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("items")
    .dropTableIfExists("markets")
    .dropTableIfExists("categories")
    .dropTableIfExists("users")
    .dropTableIfExists("countries");
};
