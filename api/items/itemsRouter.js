const router = require("express").Router();
const Items = require("./itemsModel");
const { checkItemId } = require("../middleware/middleware");

router.get("/", async (req, res, next) => {
  try {
    const items = await Items.getItems();
    res.status(200).json(items);
  } catch (err) {
    err.message = "Server failed to get items.";
    next(err);
  }
});

router.get("/:itemId", checkItemId, (req, res, next) => {
  const item = req.body;
  try {
    res.status(200).json(item);
  } catch (err) {
    err.message = "Server failed to get item.";
    next(err);
  }
});

module.exports = router;
