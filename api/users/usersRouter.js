const router = require("express").Router();
const Users = require("./usersModel");
const Items = require("../items/itemsModel");
const {
  restrict,
  checkUserBody,
  checkCountry,
  checkUserId,
  checkItemId,
  checkItemBody,
} = require("../middleware/middleware");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

router.get("/", (req, res, next) => {
  Users.getUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      err.message = "Server failed getting users.";
      next(err);
    });
});

router.get("/:id", checkUserId, restrict, (req, res, next) => {
  const user = req.user;
  const email = req.decodedToken.user;

  if (user.email !== email) {
    const err = new Error();
    err.status = 403;
    err.message = "You're not allowed to view this information";
    next(err);
  } else res.status(200).json(user);
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

router.get("/:id/items", checkUserId, restrict, (req, res, next) => {
  const { id } = req.params;
  Users.getItemsByUser(id)
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      err.message = "Server failed getting users.";
      next(err);
    });
});

router.post(
  "/:id/items",
  checkUserId,
  checkItemBody,
  restrict,
  (req, res, next) => {
    const user = req.user;
    const item = req.body;
    const email = req.decodedToken.user;

    if (user.email !== email) {
      const err = new Error();
      err.status = 403;
      err.message = "You're not allowed to post this item.";
      next(err);
    } else {
      Items.addItem(item)
        .then(([newItem]) => {
          res.status(201).json(newItem);
        })
        .catch((err) => {
          err.message = "Server failed adding a new item.";
          next(err);
        });
    }
  }
);

router.get(
  "/:id/items/:itemId",
  checkUserId,
  checkItemId,
  restrict,
  (req, res, next) => {
    //this endpoint is currently redundant because users are allowed to view items by other users.
    const { id } = req.params;
    const { itemId } = req.params;
    Items.getItemById(itemId)
      .then(([item]) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        err.message = "Server failed getting item.";
        next(err);
      });
  }
);

router.delete(
  "/:id/items/:itemId",
  checkUserId,
  checkItemId,
  restrict,
  (req, res, next) => {
    const user = req.user;
    const email = req.decodedToken.user;
    const { itemId } = req.params;

    if (user.email !== email) {
      const err = new Error();
      err.status = 403;
      err.message = "You're not allowed to delete this item.";
      next(err);
    } else {
      Items.deleteItem(itemId)
        .then((count) => {
          if (count === 1) res.sendStatus(204);
          else {
            const err = new Error();
            err.message = "Server wasn't able to delete item successfully.";
            next(err);
          }
        })
        .catch((err) => {
          err.message = "Server failed to delete an item.";
          next(err);
        });
    }
  }
);

function generateToken(email) {
  const payload = { user: email };
  const options = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
