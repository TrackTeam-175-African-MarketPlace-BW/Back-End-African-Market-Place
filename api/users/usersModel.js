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
  const [user_id] = await db("users").insert(newUser, ["id"]);
  const [user] = await getUserById(user_id.id);
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
