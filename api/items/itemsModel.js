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
  const savedItem = await db("items").insert(newItem).first();
  return getItemById(savedItem.id);
}

module.exports = { getItems, getItemById, addItem };
