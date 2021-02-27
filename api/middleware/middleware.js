const Helpers = require("../helpers/helpersModel");
const Users = require("../users/usersModel");
const Items = require("../items/itemsModel");
const secrets = require("../config/secrets");
const jwt = require("jsonwebtoken");

function restrict(req, res, next) {
  const token =
    req.headers?.authorization?.split(" ")[1] ?? req.headers?.authorization;
  if (!token) {
    const err = new Error();
    err.status = 401;
    err.message = "You're not authorized to access this endpoint.";
    next(err);
  } else {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        err.status = 401;
        err.message = "You're not authorized to access this endpoint.";
        next(err);
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  }
}

function checkUserBody(req, res, next) {
  const user = req.body;
  if (!user.email || user.email.split("@").length !== 2 || !user.password) {
    const err = new Error();
    err.status = 400;
    err.message = "Request must contain an email and password.";
    next(err);
  } else {
    next();
  }
}

async function checkUserId(req, res, next) {
  const { id } = req.params;
  try {
    const [user] = await Users.getUserById(id);
    req.user = user;
    next();
  } catch (err) {
    err.status = 404;
    err.message = "User not found.";
    next(err);
  }
}

async function checkItemId(req, res, next) {
  const { itemId } = req.params;
  try {
    const [item] = await Items.getItemById(itemId);
    req.item = item;
    next();
  } catch (err) {
    err.status = 404;
    err.message = "Item not found.";
    next(err);
  }
}

async function checkItemBody(req, res, next) {
  const item = req.body;
  const user = req.user;

  if (!item.name || !item.category || !item.market || !item.location) {
    const err = new Error();
    err.status = 400;
    err.message = "Request must contain a name, category, market and location.";
    next(err);
  } else {
    try {
      const country = await Helpers.getCountries(item.location);
      const market = await Helpers.getMarketByName(item.market);
      const category = await Helpers.getCategoryByName(item.category);
      if (!country || !market || !category) {
        const err = new Error();
        err.status = 404;
        err.message = "location, category or market not found.";
        next(err);
      } else {
        req.body = {
          name: item.name,
          description: item.description,
          price: item.price,
          category_id: category.id,
          market_id: market.id,
          user_id: user.id,
        };
        next();
      }
    } catch (err) {
      err.message = "Server failed getting country or market.";
      next(err);
    }
  }
}

async function checkCountry(req, res, next) {
  const user = req.body;

  if (!user.country) {
    const err = new Error();
    err.status = 400;
    err.message = "Request must contain a country value.";
    next(err);
  } else {
    try {
      const country = await Helpers.getCountryByName(user.country);
      if (!country) {
        const err = new Error();
        err.message = "Server failed getting the country.";
        next(err);
      } else {
        req.body = {
          email: user.email,
          password: user.password,
          name: user.name,
          user_info: user.user_info,
          user_photo: user.user_photo,
          country_id: country.id,
        };
        next();
      }
    } catch (err) {
      err.status = 400;
      err.message = "Country name is invalid.";
      next(err);
    }
  }
}

module.exports = {
  restrict,
  checkUserBody,
  checkCountry,
  checkUserId,
  checkItemId,
  checkItemBody,
};
