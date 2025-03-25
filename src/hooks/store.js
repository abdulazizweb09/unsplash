import { configureStore } from "@reduxjs/toolkit";
import setUser from './setUser'
import setLike from "./setLike";

export const store = configureStore({
  reducer: {
    user: setUser,
    like: setLike,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});
