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

module.exports = router;
