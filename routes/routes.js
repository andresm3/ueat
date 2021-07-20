const express = require("express");
const todoController = require("../controller/controller");
const router = express.Router();

router.post("/", todoController.roman2decimal);

module.exports = router;
