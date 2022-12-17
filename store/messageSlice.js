import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  token: "",
};

const messageSlice = createSlice({
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
  },
});

export const { setMessage, setToken } = messageSlice.actions;
export const getMessage = () =>typeof window !== "undefined"?JSON.parse(window.sessionStorage.getItem("message")):undefined;
export const getToken = () => typeof window !== "undefined"?JSON.parse(window.sessionStorage.getItem("token")):undefined;
export default messageSlice.reducer;
