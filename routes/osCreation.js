const express = require("express");
const router = express.Router();

router.get("/oscreation", (req, res) => {
  res.send("CRIAÇÃO DAS OS");
});
module.exports = router;
