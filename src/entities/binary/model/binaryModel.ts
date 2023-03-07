import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export type Node = {
  data: number;
  left: Node;
  right: Node;
} | null;

const initialState: Node = {
  data: 10,
  left: {
    data: 3,
    left: null,
    right: null,
  },
  right: {
    data: 8,
    left: null,
    right: null,
  },
};

const binaryModel = createSlice({
  name: "binary",
  initialState,
  reducers: {
    insert: (state, { payload }: PayloadAction<Node>) => {
      // TODO: implement this function
    },
  },
});

export const treeSelector = (state: RootState) => state.binary;

export const binaryReducer = binaryModel.reducer;
export const { insert } = binaryModel.actions;
