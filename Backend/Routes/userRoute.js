const express = require("express");
const router = express.Router();

const getUserSideBar = require("../Controllers/userControllers");
const protectUser = require("../middleware/protectUser");

router.get("/", protectUser, getUserSideBar);

module.exports = router;
