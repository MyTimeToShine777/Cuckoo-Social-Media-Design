import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../features/themes/darkModeSlice";

import authReducer from "../features/auth/authSlice";

export const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
        auth: authReducer,
    },
});