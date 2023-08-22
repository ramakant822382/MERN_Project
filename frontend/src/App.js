import React from "react";
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/Layout/header/Header";
import Home from "./Component/Layout/homePage/Home";
import ProductDetails from "./Component/productDetails/ProductDetails";
import Footer from "./Component/Layout/footer/Footer";
import Products from "./Component/productDetails/Products";
import Search from "./Component/productDetails/Search";
import Sresult from "./Component/productDetails/Sresult";
import { useSelector } from "react-redux";
import UserOptions from "./Component/Layout/header/UserOption";
import ProtectedRoute from "./Component/Route/ProtectedRoute";
import LoginSignUp from "./Component/User/LoginSignup";
import store from "./store";
import { loadUser } from "./action/userAction";
import Profile from "./Component/User/Profile";
import UpdateProfile from "./Component/User/UpdateProfile";
import UpdatePassword from "./Component/User/UpdatePassword";

import ForgotPassword from "./Component/User/ForgetPassword";
import ResetPassword from "./Component/User/ResetPassword";
import Cart from "./Component/Cart/Cart";
import Shipping from "./Component/Cart/Shipping";
import ConfirmOrder from "./Component/Cart/ConfirmOrder";
import Payment from "./Component/Cart/Payment";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./Component/Cart/orderSucess";
import MyOrders from "./Component/Order/MyOrder";
import OrderDetails from "./Component/Order/OrderDetails";
import Dashboard from "./Component/Admin/Dashboard";
import ProductList from "./Component/Admin/ProductList";
import NewProduct from "./Component/Admin/NewProduct";
import OrderList from "./Component/Admin/OrderList";
import UsersList from "./Component/Admin/UserList";
import ProductReviews from "./Component/Admin/ProductReviews";
import About from "./Component/Layout/About/About";
import Contact from "./Component/Layout/Contact/Contact";
import NotFound from "./Component/Layout/NotFound/NotFound";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const stripeApiKey =
    "pk_test_51NdO3tSDwJB0GTwD9NWFSoU2K2XXCe3GIfQLnV3Vd9RSDSwkwvy0wfRKdRvxuf08okeSLYhyNDeOadqRCpj7NOrn00lQ4yr2sN";

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/product/:id" Component={ProductDetails} />
        <Route path="/products" Component={Products} />

        <Route path="/search" Component={Search} />
        <Route path="/search/:keyword" Component={Sresult} />

        <Route path="/login" Component={LoginSignUp} />
        <Route path="/account" element={<Profile />} />
        <Route path="/success" element={<OrderSuccess />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/me/update"
          element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/password/update"
          element={
            <ProtectedRoute>
              <UpdatePassword />
            </ProtectedRoute>
          }
        />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" Component={ResetPassword} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order/confirm" element={<ConfirmOrder />} />

        <Route
          path="/process/payment"
          element={
            <ProtectedRoute>
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <MyOrders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <ProtectedRoute>
              <ProductList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/product"
          element={
            <ProtectedRoute>
              <NewProduct />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute>
              <OrderList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <UsersList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/reviews"
          element={
            <ProtectedRoute>
              <ProductReviews />
            </ProtectedRoute>
          }
        />
        <Route path="/order/:id" element={<OrderDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
