const router = require("express").Router();
const Helpers = require("./helpersModel");

router.get("/countries", async (req, res, next) => {
  try {
    const countries = await Helpers.getCountries();
    res.status(200).json(countries);
  } catch (err) {
    err.message = "Server failed to get countries.";
    next();
  }
});

router.get("/categories", async (req, res, next) => {
  try {
    const categories = await Helpers.getCategories();
    res.status(200).json(categories);
  } catch (err) {
    err.message = "Server failed to get categories.";
    next();
  }
});

router.get("/markets", async (req, res, next) => {
  const country = req.query.country;
  if (!country) {
    try {
      const markets = await Helpers.getMarkets();
      res.status(200).json(markets);
    } catch (err) {
      err.message = "Server failed to get markets.";
      next();
    }
  } else {
    try {
      const markets = await Helpers.getMarkets(country);
      res.status(200).json(markets);
    } catch (err) {
      err.message = `Server failed to get markets in ${country}.`;
      next(err);
    }
  }
});

module.exports = router;
