import { createSlice } from "@reduxjs/toolkit";

const mode = JSON.parse(localStorage.getItem("darkMode"));
const initialState = {
  mode: mode ? mode : false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = !state.mode;

      localStorage.setItem("darkMode", JSON.stringify(state.mode));
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
