import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProductDetail } from "../../action/productAction";
import "./productDetails.css";
import { useParams } from "react-router-dom";

import ReviewCard from "./ReviewCard";
import { useAlert } from "react-alert";
import { useState } from "react";
import { addItemsToCart } from "../../action/cartAction";
import { Rating } from "@material-ui/lab";
import Loader from "../Layout/loading/loading";
import { newReview } from "../../action/reviewAction";
import { NEW_REVIEW_RESET } from "../../constant/review";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";

const ProductDetails = () => {
  const { product, loading, error } = useSelector(
    (state) => state.productDetail
  );

  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = useParams();
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getProductDetail(id));
  }, [dispatch, id, error, alert, reviewError, success]);

  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
    edit: false,
    isHalf: true,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
  };

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };
  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Item Added To Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id);

    dispatch(newReview(myForm));

    setOpen(false);
  };
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="ProductDetails">
            <div className="image">
              {product.images &&
                product.images.map((item, i) => (
                  <img
                    className="CarouselImage"
                    key={item.url}
                    src={item.url}
                    alt={`${i} Slide`}
                  />
                ))}
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product #{product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <Rating {...options} />
                <span>({product.numOfReviews} Reviews)</span>
              </div>

              <div className="detailsBlock-3">
                <h1>{`₹ ${product.price}`}</h1>
              </div>
              <div className="detailsBlock-3-1">
                <div className="detailsBlock-3-1-1">
                  <button onClick={decreaseQuantity}>-</button>
                  <input type="number" readOnly value={quantity} />
                  <button onClick={increaseQuantity}>+</button>
                </div>
                <button onClick={addToCartHandler}>Add to Cart</button>
              </div>
              <p>
                Status:
                <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                  {product.Stock < 1 ? "OutStock" : "InStock"}
                </b>
              </p>

              <div className="detailsBlock-4">
                Description: <p>{product.description}</p>
              </div>
              <button className="submitReview" onClick={submitReviewToggle}>
                Submit Review
              </button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => <ReviewCard review={review} />)}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
