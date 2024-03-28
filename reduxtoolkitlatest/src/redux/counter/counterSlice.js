import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    multiply: (state) => {
      state.value *= 2;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, multiply } =
  counterSlice.actions;

export default counterSlice.reducer;


//  https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux#:~:text=Reducers%3A%20As%20we%20already%20know,the%20state%20of%20the%20application.