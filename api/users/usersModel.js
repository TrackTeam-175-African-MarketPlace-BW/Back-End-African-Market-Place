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
  const [user_id] = await db("users").insert(newUser, ["id"]);
  const [user] = await getUserById(user_id);
  return user;
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
      "countries.country as location",
      "users.name as owner",
      "users.email as owner_email"
    )
    .from("items")
    .where("items.user_id", id)
    .join("users", "items.user_id", "=", "users.id")
    .join("categories", "items.category_id", "=", "categories.id")
    .join("markets", "items.market_id", "=", "markets.id")
    .join("countries", "markets.country_id", "=", "countries.id");
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
