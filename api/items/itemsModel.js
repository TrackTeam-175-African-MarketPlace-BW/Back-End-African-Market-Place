const { select } = require("../../data/dbConfig");
const db = require("../../data/dbConfig");

function getItems() {
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
    .join("users", "items.user_id", "=", "users.id")
    .join("categories", "items.category_id", "=", "categories.id")
    .join("markets", "items.market_id", "=", "markets.id")
    .join("countries", "markets.country_id", "=", "countries.id");
}

function getItemById(id) {
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
    .where("items.id", id)
    .join("users", "items.user_id", "=", "users.id")
    .join("categories", "items.category_id", "=", "categories.id")
    .join("markets", "items.market_id", "=", "markets.id")
    .join("countries", "markets.country_id", "=", "countries.id");
}

async function addItem(newItem) {
  console.log("NEW ITEM:", newItem);
  const [newId] = await db("items").insert(newItem, ["id"]);
  console.log("NEW: ", newId);
  console.log("NEW: ", [newId]);
  return getItemById(newId.id ?? newId);
}

async function editItem(id, changedItem) {
  const item_id = await db("items").where("items.id", id).update(changedItem);
  return await getItemById(id);
}

async function deleteItem(id) {
  const count = await db("items").where({ id }).del();
  return count;
}

module.exports = { getItems, getItemById, addItem, deleteItem, editItem };
