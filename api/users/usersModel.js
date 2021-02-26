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

function getUserByEmail(email) {
  return db("users").where({ email }).first();
}

async function addUser(newUser) {
  const [user_id] = await db("users").insert(newUser, ["id"]);
  const [user] = await getUserById(user_id);
  return user;
}

async function editUser(savedUser) {
  const [user_id] = await db("users")
    .where({ id: savedUser.id })
    .update(savedUser, ["id"]);
  const [user] = await getUserById(user_id.id);
  return user;
}

module.exports = { getUsers, getUserById, getUserByEmail, addUser, editUser };
