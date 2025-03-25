import { createSlice } from "@reduxjs/toolkit";

const setLike = createSlice({
  name: "likes",
  initialState: [],
  reducers: {
    addLike: (state, action) => {
      const exists = state.find((img) => img.id === action.payload.id);
      if (exists) {
        return state.filter((img) => img.id !== action.payload.id);        
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { addLike } = setLike.actions;
export default setLike.reducer;
