import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducer,
  productsReducer,
  searchProductsReducer,
} from "./reducer/productReducer";
import {
  forgotPasswordReducer,
  profileReducer,
  userReducer,
} from "./reducer/userReducer";
import { cartReducer, shippingReducer } from "./reducer/cartReducer";
import { newOrderReducer } from "./reducer/orderReducer";
import { myOrdersReducer, orderDetailsReducer } from "./reducer/myOrderReducer";
import { newReviewReducer } from "./reducer/reviewReducer";
import { adminProductsReducer, allOrdersReducer, allUsersReducer, newProductReducer, productDeleteReducer, productReviewsReducer } from "./reducer/adminReducer";


const reducer = combineReducers({
  products: productsReducer,
  productDetail: productDetailsReducer,
  searchProduct: searchProductsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  shipping: shippingReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
  adminProduct: adminProductsReducer,
  newProduct: newProductReducer,
  product: productDeleteReducer,
  allOrders: allOrdersReducer,
  allUsers: allUsersReducer,
  productReviews: productReviewsReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
