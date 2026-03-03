import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/taskSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    cart: cartReducer,
  },
});