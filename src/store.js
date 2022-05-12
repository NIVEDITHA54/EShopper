import { createStore, compose,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";



const initialState = {
  cart: {
    cartItems: [], 
  },
};
const reducer = combineReducers({
  cart: cartReducer,

});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;