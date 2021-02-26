const router = require("express").Router();
const Items = require("./itemsModel");

router.get("/", async (req, res, next) => {
  try {
    const items = await Items.getItems();
    res.status(200).json(items);
  } catch (err) {
    err.message = "Server failed to get items.";
    next(err);
  }
});

module.exports = router;
