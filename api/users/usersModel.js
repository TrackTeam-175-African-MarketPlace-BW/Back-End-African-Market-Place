const db = require("../../data/dbConfig");

function getUsers() {
  return db
    .select(
      "users.id",
      "users.email",
      "users.name",
      "users.user_info",
      "users.user_photo",
      "countries.country"
    )
    .from("users")
    .join("countries", "users.country_id", "=", "countries.id");
}

function getUserById(id) {
  return db
    .select(
      "users.id",
      "users.email",
      "users.name",
      "users.user_info",
      "users.user_photo",
      "countries.country"
    )
    .from("users")
    .where("users.id", id)
    .join("countries", "users.country_id", "=", "countries.id");
}

function getFullUserDetails(id) {
  return db("users").where({ id }).first();
}

function getUserByEmail(email) {
  return db("users").where({ email }).first();
}

async function addUser(newUser) {
  const [newId] = await db("users").insert(newUser, ["id"]);
  return getUserById(newId.id ?? newId);
}

function editUser(id, changedUser) {
  return db("users").where({ id }).update(changedUser);
}

function getItemsByUser(id) {
  return db
    .select(
      "items.id",
      "items.name",
      "items.description",
      "items.price",
      "categories.category",
      "markets.market",
      "countries.country",
      "users.name as owner",
      "users.email as owner_email"
    )
    .from("items")
    .where("items.user_id", id)
    .join("users", "items.user_id", "=", "users.id")
    .join("categories", "items.category_id", "=", "categories.id")
    .join("markets", "items.market_id", "=", "markets.id")
    .join("markets_countries", "markets_countries.market_id", "=", "markets.id")
    .join("countries", "countries.id", "=", "markets_countries.country_id");
}

module.exports = {
  getUsers,
  getUserById,
  getFullUserDetails,
  getUserByEmail,
  addUser,
  editUser,
  getItemsByUser,
};
