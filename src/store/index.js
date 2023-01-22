import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import PlacesReducer from "./places.reducer";
import CategoryReducer from "../store/reducers/category.reducer";
import BreadReducer from "./reducers/breads.reducer";
import CartReducer from "./reducers/cart.reducer";
import OrderReducer from "./reducers/order.reducer";
import AuthReducer from "./reducers/auth.reducer";

const RootReducer = combineReducers({
  places: PlacesReducer,
  categories: CategoryReducer,
  breads: BreadReducer,
  cart: CartReducer,
  orders: OrderReducer,
  auth: AuthReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
