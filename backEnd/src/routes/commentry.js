const express = require("express");
const router = express.Router();
const getCommentry = require("../db/commentryDb");

const cors = require("cors");
router.use(cors());

router.get("/", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  getCommentry(res);
});

module.exports = router;
