const express = require("express");

const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();
// get all product route
router.route("/products").get(getAllProduct);
// create new product route
router.route("/admin/product/new").post(createProduct);
router
  .route("/admin/products/:id")
  .put(authorizeRoles, updateProduct)
  .delete(deleteProduct)
  .get(isAuthenticatedUser, getProductDetails);

router.route("/product/:id").get(getProductDetails);
router.route("/review").put(createProductReview);
router
  .route("/admin/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

router.route("/admin/products").get(getAdminProducts);

module.exports = router;
