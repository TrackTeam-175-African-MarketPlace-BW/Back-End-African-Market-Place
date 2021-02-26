const knex = require("knex");
const knexConfig = require("../knexfile");
require("dotenv").config();

const ENVIRONMENT = process.env.ENVIRONMENT || "development";

module.exports = knex(knexConfig[ENVIRONMENT]);
