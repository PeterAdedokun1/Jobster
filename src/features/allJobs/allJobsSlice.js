import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  //   ...initialFiltersState,
};

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
});

export default allJobsSlice.reducer;
