const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
} = require("../controllers/orderController");
router.route("/order/new").post(newOrder);
router.route("/order/:id").get(getSingleOrder);

router.route("/orders/me").get(myOrders);

router.route("/admin/orders").get(getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRoles, updateOrder);

module.exports = router;
