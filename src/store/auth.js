import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAutheticated: false,
};

const authSlice = createSlice({
  name: "autheticated",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },

    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
