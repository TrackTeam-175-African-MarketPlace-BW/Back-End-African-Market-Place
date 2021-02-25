const router = require("express").Router();
const Users = require("./usersModel");

router.get("/", (req, res) => {
    Users.getUsers()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((err) => {
            res.status(500).json({ message: "Server failed getting users." });
        });
});

module.exports = router;