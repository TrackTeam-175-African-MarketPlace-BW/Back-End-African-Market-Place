const knex = require("knex");
const knexConfig = require("../knexfile");
require("dotenv").config();

const environment = process.env.ENVIRONMENT || "development";

module.exports = knex(knexConfig[environment]);
