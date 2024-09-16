import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const BASE_EXCHANGE_URL_API = "https://openexchangerates.org/api/latest.json";

const BASE_API_KEY = "9877a004d0a74e01a5a9b5b4e4dfc14b";

axios.create({
  baseURL: BASE_EXCHANGE_URL_API,
});

export const getCurrencyRate = createAsyncThunk(
  "api/rate",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_EXCHANGE_URL_API}?app_id=${BASE_API_KEY}`
      );
      // console.log(response.data);

      return response.data;
    } catch (error) {
      // console.log(error.response?.data?.message || error.message);

      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
