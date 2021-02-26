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

async function getMarkets(...args) {
  if (args.length === 0) return db("markets");
  else {
    const country = args[0];
    const savedCountry = await getCountryByName(country);
    return db("markets").where({ country_id: savedCountry.id });
  }
}

module.exports = {
  getCountries,
  getCountryById,
  getCountryByName,
  getCategories,
  getMarkets,
};
