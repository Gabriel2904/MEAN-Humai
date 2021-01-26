const express = require("express");
const router = express.Router();
const { signIn, signUp } = require("./../controllers/auth");

router.post("/signnIn", signIn);
router.post("/signUp", signUp);

module.exports = router;
