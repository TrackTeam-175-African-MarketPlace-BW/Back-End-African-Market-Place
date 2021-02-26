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
      "countries.country as location",
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
      "countries.country as location",
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
  const [newId] = await db("items").insert(newItem);
  return getItemById(newId);
}

async function editItem(changedItem) {
  const [item_id] = await db("items")
    .where({ id: changedItem.id })
    .update(changedItem, ["id"]);
  const [updatedItem] = await getUserById(item_id.id);
  return updatedItem;
}

async function deleteItem(id) {
  const count = await db("items").where({ id }).del();
  return count;
}

module.exports = { getItems, getItemById, addItem, deleteItem, editItem };
