import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: true,
};

const setUser = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action) => {
      state.user = action.payload;
       state.loading = false;
    },
    remuv: (state) => {
      state.user = null;
       state.loading = false;
    },
    setloading: (state, action) => {
      state.loading = action.payload
    },
  },
});

export const { add, remuv,setloading } = setUser.actions;
export default setUser.reducer;
