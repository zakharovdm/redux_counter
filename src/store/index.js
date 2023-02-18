import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducer: {
    incrememnt(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increace(state, action) {
      state.counter = state.counter + action.amount;
    },
    toogle(state) {
      state.showCounter = !state.showCounter
    },
  },
});

const store = configureStore({
  counter: counterSlice.reducer
});

export default store;
