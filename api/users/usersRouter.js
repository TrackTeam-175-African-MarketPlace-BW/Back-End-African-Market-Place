const router = require("express").Router();
const Users = require("./usersModel");
const {
  checkUserBody,
  checkCountry,
  checkUserId,
} = require("../middleware/middleware");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

router.get("/", (req, res) => {
  Users.getUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ message: "Server failed getting users." });
    });
});

router.get("/:id", checkUserId, (req, res) => {
  const user = req.body;

  res.status(200).json({
    id: user.id,
    email: user.email,
    name: user.name,
    user_info: user.user_info,
    user_photo: user.user_photo,
    country_id: user.country_id,
  });
});

router.post(
  "/register",
  checkUserBody,
  checkCountry,
  async (req, res, next) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    try {
      const newUser = await Users.addUser({ ...user, password: hash });
      console.log("REACHED HERE!!!");
      res.status(201).json(newUser);
    } catch (err) {
      err.message = "Server failed to add user.";
      next(err);
    }
  }
);

router.post("/login", checkUserBody, async (req, res, next) => {
  const user = req.body;
  try {
    const savedUser = await Users.getUserByEmail(user.email);
    if (savedUser && bcrypt.compareSync(user.password, savedUser.password)) {
      const token = generateToken(savedUser.email);
      res.status(200).json({ message: "login successful.", token });
    } else {
      const err = new Error();
      err.status = 401;
      err.message = "login details incorrect.";
      next(err);
    }
  } catch (err) {
    err.message = "Server failed to add user.";
    next(err);
  }
});

function generateToken(email) {
  const payload = { user: email };
  const options = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
