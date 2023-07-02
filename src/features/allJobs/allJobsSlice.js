import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";

const initialState = {
  isLoading: true,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  //   ...initialFiltersState,
};

export const getAllJobs = createAsyncThunk("allJobs/getJobs", async (_, thunkAPI) => {
  let url = "/jobs"
  try {
    const resp = await customFetch.get(url, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`
      }
    })
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
})

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
});

export default allJobsSlice.reducer;
