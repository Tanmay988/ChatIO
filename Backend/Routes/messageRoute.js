const express = require("express");
const route = express.Router();

const {sendMessage, getMessage} = require("../Controllers/messageControllers");
const protectUser = require("../middleware/protectUser");
const { get } = require("mongoose");

route.post("/send/:id", protectUser, sendMessage);

route.get("/:id", protectUser, getMessage);

module.exports = route;
