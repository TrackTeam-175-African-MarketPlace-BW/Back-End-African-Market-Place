const db = require("../../data/dbConfig");

function getCountries() {
  return db("countries");
}

function getCountryById(id) {
  return db("countries").where({ id });
}

function getCountryByName(country) {
  return db("countries").where({ country }).first();
}

function getCategories() {
  return db("categories");
}

function getCategoryById(id) {
  return db("categories").where({ id });
}

function getCategoryByName(category) {
  return db("categories").where({ category }).first();
}

async function getMarkets(...args) {
  if (args.length === 0)
    return db
      .select("markets.id", "markets.market", "countries.country as location")
      .from("markets")
      .join("countries", "markets.country_id", "=", "countries.id");
  else {
    const country = args[0];
    const savedCountry = await getCountryByName(country);
    return db
      .select("markets.id", "markets.market", "countries.country as location")
      .from("markets")
      .where("markets.country_id", savedCountry.id)
      .join("countries", "markets.country_id", "=", "countries.id");
  }
}

function getMarketById(id) {
  return db("markets").where({ id });
}

function getMarketByName(market) {
  return db("markets").where({ market }).first();
}

module.exports = {
  getCountries,
  getCountryById,
  getCountryByName,
  getCategories,
  getMarkets,
  getCategoryById,
  getCategoryByName,
  getMarketById,
  getMarketByName,
};
