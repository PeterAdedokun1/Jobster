import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/user/UserSlice";
export const store = configureStore({
    reducer: {
        user: UserSlice
    }
})