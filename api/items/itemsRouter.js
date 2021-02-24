const router = require("express").Router();

router.get("/", (req, res) => {
    res.status(200).json({ items: "up" });
});

module.exports = router;