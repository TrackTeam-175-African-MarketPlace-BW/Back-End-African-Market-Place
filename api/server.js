const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const usersRouter = require("./users/usersRouter");
const itemsRouter = require("./items/itemsRouter");
const helpersRouter = require("./helpers/helpersRouter");
const { restrict } = require("./middleware/middleware");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/users", usersRouter);
server.use("/api/items", restrict, itemsRouter);
server.use("/api", helpersRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Server failed...";
  res.status(errorStatus).json({ message: errorMessage, stack: error.stack });
});

module.exports = server;
