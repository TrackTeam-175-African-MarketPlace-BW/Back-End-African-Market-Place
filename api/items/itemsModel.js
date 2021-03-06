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
    .join(
      "markets_countries",
      "markets_countries.market_id",
      "=",
      "markets.id"
    )
    .join("countries", "countries.id", "=", "markets_countries.country_id");
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
    .join(
      "markets_countries",
      "markets_countries.market_id",
      "=",
      "markets.id"
    )
    .join("countries", "countries.id", "=", "markets_countries.country_id");
}

async function addItem(newItem) {
  const [newId] = await db("items").insert(newItem, ["id"]);
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
