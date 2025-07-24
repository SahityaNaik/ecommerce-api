const express = require("express");
const router = express.Router();
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
} = require("../controllers/cartController");

const { protect, customerOnly } = require("../middleware/authMiddleware");

// All routes below require login as customer
router.get("/", protect, customerOnly, getCart);
router.post("/add", protect, customerOnly, addToCart);
router.put("/update", protect, customerOnly, updateCartItem);
router.delete("/remove/:productId", protect, customerOnly, removeFromCart);

module.exports = router;
