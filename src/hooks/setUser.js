import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, 
};

const setUser = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { add, clearUser } = setUser.actions;
export default setUser.reducer;
