import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  token: "",
  username:""
};

const authDataSlice = createSlice({
  name: "msg",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.msg = action.payload;
      if (typeof window !== "undefined")
        window.sessionStorage.setItem(
          "message",
          JSON.stringify(action.payload)
        );
    },
    setToken: (state, action) => {
      state.token = action.payload;
      if (typeof window !== "undefined")
        window.sessionStorage.setItem("token", JSON.stringify(action.payload));
    },
    setUsername:(state,action)=>{
      state.username = action.payload;
      if (typeof window !== "undefined")
      window.sessionStorage.setItem("username",JSON.stringify(action.payload));
    }
  },
});

export const { setMessage, setToken, setUsername } = authDataSlice.actions;
export const getMessage = () =>typeof window !== "undefined"?JSON.parse(window.sessionStorage.getItem("message")):undefined;
export const getToken = () => typeof window !== "undefined"?JSON.parse(window.sessionStorage.getItem("token")):undefined;
export const getUsername = () => typeof window !== "undefined"?JSON.parse(window.sessionStorage.getItem("username")):undefined;
export default authDataSlice.reducer;
