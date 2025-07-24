const express = require("express");
const router = express.Router();
const { placeOrder, getMyOrders } = require("../controllers/orderController");
const { protect, customerOnly } = require("../middleware/authMiddleware");

router.post("/place", protect, customerOnly, placeOrder);
router.get("/my", protect, customerOnly, getMyOrders);

module.exports = router;
