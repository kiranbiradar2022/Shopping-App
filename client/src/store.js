import {
  getAllProductsReducer,
  updateProductReducer,
  addProductReducer,
  deleteProductReducer,
  getProductByIdReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  loginReducer,
  registerNewUserReducer,
  updateReducer,
  getAllUsersReducer,
  deleteUserReducer,
} from "./reducers/userReducer";
import {
  getOrderByIdReducer,
  getAllOrdersReducer,
  getOrdersByUserIdReducer,
  placeOrderReducer,
} from "./reducers/orderReducer";

const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  cartReducer: cartReducer,
  registerNewUserReducer: registerNewUserReducer,
  loginReducer: loginReducer,
  placeOrderReducer: placeOrderReducer,
  getOrderByIdReducer: getOrderByIdReducer,
  getOrdersByUserIdReducer: getOrdersByUserIdReducer,
  updateReducer: updateReducer,
  getAllUsersReducer: getAllUsersReducer,
  deleteUserReducer: deleteUserReducer,
  deleteProductReducer: deleteProductReducer,
  addProductReducer: addProductReducer,
  getAllOrdersReducer: getAllOrdersReducer,
  updateProductReducer: updateProductReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  cartReducer: { cartItems: cartItems },
  loginReducer: { currentUser: currentUser },
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
