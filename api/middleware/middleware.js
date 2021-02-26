const Helpers = require("../helpers/helpersModel");

function restrict(req, res, next) {
  next();
}

function checkUserBody(req, res, next) {
  const user = req.body;
  if (!user.email || user.email.split("@").length !== 2 || !user.password) {
    const err = new Error();
    err.status = 400;
    err.message = "Request must contain an email, password.";
    next(err);
  } else {
    next();
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

module.exports = { restrict, checkUserBody, checkCountry };
