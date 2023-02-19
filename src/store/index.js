import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increace(state, action) {
      state.counter = state.counter + action.payload;
    },
    toogle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAutheticated: false,
};

const authSlice = createSlice({
  name: "autheticated",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAutheticated = true;
    },

    logout(state) {
      state.isAutheticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
