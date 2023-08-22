import {
   
    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
  MY_ORDERS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
    CLEAR_ERRORS,
} from "../constant/orderConstant";
  



// my order

export const myOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
      case MY_ORDERS_REQUEST:
        return {
          loading: true,
        };
  
      case MY_ORDERS_SUCCESS:
        return {
          loading: false,
          orders: action.payload,
        };
  
      case MY_ORDERS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  // order Details

  export const orderDetailsReducer = (state = { order: {} }, action) => {
    switch (action.type) {
      case ORDER_DETAILS_REQUEST:
        return {
          loading: true,
        };
  
      case ORDER_DETAILS_SUCCESS:
        return {
          loading: false,
          order: action.payload,
        };
  
      case ORDER_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };