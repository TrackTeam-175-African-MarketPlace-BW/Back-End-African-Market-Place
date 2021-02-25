const knex = require("knex");
const knexConfig = require("../knexfile");
require("dotenv").config();

const ENVIRONMENT = process.env.ENVIRONMENT;

module.exports = knex(knexConfig[ENVIRONMENT]);