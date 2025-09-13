import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: null,
};

const useModalka = createSlice({
  name: "modal",
  initialState,
  reducers: {
    addModal: (state, action) => {
      state.modal = action.payload;
    },
    remuvModal: (state) => {
      state.modal = null;
    }
  },
});

export const { addModal, remuvModal } = useModalka.actions;
export default useModalka.reducer;
