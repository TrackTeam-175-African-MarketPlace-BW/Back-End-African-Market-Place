const db = require("../../data/dbConfig");

function getUsers() {
  return db("users");
}

function getUserById(id) {
  return db("users").where({ id });
}

function getUserByEmail(email) {
  return db("users").where({ email }).first();
}

async function addUser(newUser) {
  const [id] = await db("users").insert(newUser, ["id"]);
  return getUserById(id);
}

async function editUser(savedUser) {
  const [id] = await db("users")
    .where({ id: savedUser.id })
    .update(savedUser, ["id"]);
  return getUserById(id);
}

module.exports = { getUsers, getUserById, getUserByEmail, addUser, editUser };
