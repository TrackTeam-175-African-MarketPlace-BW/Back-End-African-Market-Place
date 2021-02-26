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

module.exports = { getCountries, getCountryById, getCountryByName };
