import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddPostModalState } from "../types";

const initialState: AddPostModalState = {
  isOpen: false,
};

const addPostModalSlice = createSlice({
  name: "addPostModal",
  initialState,
  reducers: {
    setIsAddPostModal: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const addPostModalActions = addPostModalSlice.actions;
export const addPostModalReducer = addPostModalSlice.reducer;
