import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isFetching: false,
  cinemaList: [],
  showTimesList: undefined,
  error: undefined,
};

export const { reducer: quanLyRapReducer, actions: quanLyRapActions } =
  createSlice({
    name: "quanLyRap",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        //getCinemaList
        .addCase(getCinemaList.pending, (state, action) => {
          state.isFetching = true;
        })

        .addCase(getCinemaList.fulfilled, (state, action) => {
          state.isFetching = false;
          state.cinemaList = action.payload;
        })
        .addCase(getCinemaList.rejected, (state, action) => {
          state.isFetching = false;
          state.error = action.payload;
        })
        //getShowTimesList
        .addCase(getShowTimes.pending, (state, action) => {
          state.isFetching = true;
        })
        .addCase(getShowTimes.fulfilled, (state, action) => {
          state.isFetching = false;
          state.showTimesList = action.payload;
        })
        .addCase(getShowTimes.rejected, (state, action) => {
          state.isFetching = false;
          state.error = action.payload;
        });
    },
  });

export const getCinemaList = createAsyncThunk(
  "quanLyRap/getCinemeList",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP13",
        method: "GET",
        headers: {
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMjUiLCJIZXRIYW5TdHJpbmciOiIxNS8wNS8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODQxMDg4MDAwMDAiLCJuYmYiOjE2NjY3MTcyMDAsImV4cCI6MTY4NDI1NjQwMH0.vdVVhPEIB7ZV9oEaVDyxq430wfBgJgeYqiM5JTcdwqo",
        },
      });
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getShowTimes = createAsyncThunk(
  "quanLyRap/getShowTimes",
  async (movieId, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
        method: "GET",
        headers: {
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMjUiLCJIZXRIYW5TdHJpbmciOiIxNS8wNS8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODQxMDg4MDAwMDAiLCJuYmYiOjE2NjY3MTcyMDAsImV4cCI6MTY4NDI1NjQwMH0.vdVVhPEIB7ZV9oEaVDyxq430wfBgJgeYqiM5JTcdwqo",
        },
      });
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
