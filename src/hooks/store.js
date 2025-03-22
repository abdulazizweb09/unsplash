import { configureStore } from "@reduxjs/toolkit";
import setUser from './setUser'

export const store = configureStore({
  reducer: {
    user: setUser,
  },
});
