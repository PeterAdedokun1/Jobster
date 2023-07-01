import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/user/UserSlice";
import JobSlice from "../features/job/jobSlice";
export const store = configureStore({
    reducer: {
        user: UserSlice,
        job: JobSlice,
    }
})