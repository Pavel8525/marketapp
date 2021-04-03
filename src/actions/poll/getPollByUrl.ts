import { createAsyncThunk } from "@reduxjs/toolkit";
import pollServices from "services/poll";

const getPollByUrlActionType = "poll/getPollByUrl";

/**
 * @description Запрос на получение данных об опросе из queryParam
 */
const getPollByUrl = createAsyncThunk(
  getPollByUrlActionType,
  async (url: string, { rejectWithValue }) => {
    try {
      const data = await pollServices.getPollByUrl(url);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export default getPollByUrl;
