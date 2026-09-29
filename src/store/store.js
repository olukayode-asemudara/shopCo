import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { dummyJsonData } from "../api/dummJsonApi";
import cartReducer from "../slices/cartSlice";

export const store = configureStore({
  reducer: {
    [dummyJsonData.reducerPath]: dummyJsonData.reducer,
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dummyJsonData.middleware),
});

setupListeners(store.dispatch);
