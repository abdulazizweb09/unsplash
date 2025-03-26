import { createSlice } from "@reduxjs/toolkit";

const setLike = createSlice({
  name: "likes",
  initialState: JSON.parse(localStorage.getItem("like"))||[],
  reducers: {
    addLike: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("like", JSON.stringify(state));
    },
  },
});

export const { addLike } = setLike.actions;
export default setLike.reducer;
