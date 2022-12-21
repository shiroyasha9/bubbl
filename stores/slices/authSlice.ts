import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { TOAuthUserData } from "@types";
import { TokenResponse } from "expo-auth-session";

interface AuthState {
  userInfo: TOAuthUserData | null;
  auth: TokenResponse | null;
}

const initialState: AuthState = {
  userInfo: null,
  auth: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveAuthInfo: (
      state,
      action: PayloadAction<{
        userInfo?: TOAuthUserData;
        auth?: TokenResponse;
      }>,
    ) => {
      state.userInfo = action.payload.userInfo || state.userInfo;
      state.auth = action.payload.auth || state.auth;
    },
    resetAuthInfo: (state) => {
      state.userInfo = null;
      state.auth = null;
    },
  },
});

export const { saveAuthInfo, resetAuthInfo } = authSlice.actions;

export default authSlice.reducer;
