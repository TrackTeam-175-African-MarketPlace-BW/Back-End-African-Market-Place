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
  console.log("ID: ", id);
  const [user] = await getUserById(id);
  console.log("User: ", user);
  return user;
}

async function editUser(savedUser) {
  const [id] = await db("users")
    .where({ id: savedUser.id })
    .update(savedUser, ["id"]);
  const [user] = await getUserById(id);
  return user;
}

module.exports = { getUsers, getUserById, getUserByEmail, addUser, editUser };
