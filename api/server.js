const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const usersRouter = require("./users/usersRouter");
const itemsRouter = require("./items/itemsRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/users", usersRouter);
server.use("/api/items", itemsRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
});

module.exports = server;