import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "app/store";

export type Node = {
  data: number;
  left: Node;
  right: Node;
} | null;

const initialState: Node = {
  data: 0,
  left: null,
  right: null,
};

// WARNING: Tree is not balanced
const binaryModel = createSlice({
  name: "binary",
  initialState,
  reducers: {
    insert: (state, { payload }: PayloadAction<Node>) => {
      if (!payload) return;
      if (state === null) {
        state = payload;
        return;
      }

      let current = state;
      while (current) {
        // No duplicates
        if (payload.data === current.data) return;

        if (payload.data < current.data) {
          if (current.left === null) {
            current.left = payload;
            return;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = payload;
            return;
          }
          current = current.right;
        }
      }
    },
  },
});

export const treeSelector = (state: RootState) => state.binary;

export const binaryReducer = binaryModel.reducer;
export const { insert } = binaryModel.actions;
