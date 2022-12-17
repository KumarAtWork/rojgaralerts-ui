import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  rows: 1,
};

const subjectSlice = createSlice({
  name: "rows",
  initialState,
  reducers: {
    addSubjectRow: (state) => {
      if (typeof window !== "undefined") {
        if (null !== window.sessionStorage.getItem("rowCount")) {
          window.sessionStorage.setItem(
            "rowCount",
            parseInt(window.sessionStorage.getItem("rowCount")) + 1
          );
          state.rows = parseInt(window.sessionStorage.getItem("rowCount"));
        } else {
          window.sessionStorage.setItem("rowCount", state.rows + 1);
          state.rows = parseInt(window.sessionStorage.getItem("rowCount"));
        }
      }
    },
  },
});

export const { addSubjectRow } = subjectSlice.actions;
export const getAllSubjects = () => typeof window !== "undefined" && window.sessionStorage.getItem("rowCount")?window.sessionStorage.getItem("rowCount"):1;
export default subjectSlice.reducer;
