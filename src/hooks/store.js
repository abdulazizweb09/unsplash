import { configureStore } from "@reduxjs/toolkit";
import setUser from './setUser'
import setLike from "./setLike";
import UseModal from "./useModalka";


export const store = configureStore({
  reducer: {
    user: setUser,
    like: setLike,
    modal: UseModal
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
