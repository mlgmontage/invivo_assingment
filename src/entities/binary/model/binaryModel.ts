import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Node = {
  data: number;
  left: Node;
  right: Node;
} | null;

const initialState: Node = null;

const binaryModel = createSlice({
  name: "binary",
  initialState,
  reducers: {
    insert: (state, { payload }: PayloadAction<Node>) => {
      // TODO: implement this function
    },
  },
});

export const binaryReducer = binaryModel.reducer;
export const { insert } = binaryModel.actions;
