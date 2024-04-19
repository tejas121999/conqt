const express = require("express");
const router = express.Router();
const controller = require("../controllers/Product");

router.post("/create-product", controller.createProduct);
router.get("/get-product", controller.getProduct);

module.exports = router;
