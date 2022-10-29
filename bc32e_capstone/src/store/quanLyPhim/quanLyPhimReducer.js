import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  movieList: [],
  isFetching: false,
  error: undefined,
  carouselList: [],
  cinemaList: [],
};

export const { reducer: quanLyPhimReducer, actions: quanLyPhimActions } =
  createSlice({
    name: "quanLyPhim",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getMovieList.pending, (state, action) => {
          state.isFetching = true;
        })
        .addCase(getMovieList.fulfilled, (state, action) => {
          state.movieList = action.payload;
          state.isFetching = false;
        })
        .addCase(getMovieList.rejected, (state, action) => {
          state.isFetching = false;
          state.error = action.payload;
        });
      builder.addCase(getCarouselList.pending, (state, action) => {
        state.isFetching = true;
      });

      builder
        .addCase(getCarouselList.fulfilled, (state, action) => {
          state.isFetching = false;
          state.carouselList = action.payload;
        })
        .addCase(getCarouselList.rejected, (state, action) => {
          state.isFetching = false;
          state.error = action.payload;
        });

      builder.addCase(getCinemaList.pending, (state, action) => {
        state.isFetching = true;
      });
      builder
        .addCase(getCinemaList.fulfilled, (state, action) => {
          state.isFetching = false;
          state.cinemaList = action.payload;
        })
        .addCase(getCinemaList.rejected, (state, action) => {
          state.isFetching = false;
          state.error = action.payload;
        });

      // Thêm phim upload hình
      builder
        .addCase(themPhimUploadHinh.pending, (state, action) => {
          state.isFetching = true;
        })
        .addCase(themPhimUploadHinh.fulfilled, (state, action) => {
          state.isFetching = false;
          console.log(action.payload);
          Swal.fire("Thành Công!", "Bạn đã thêm phim thành công!", "success");
          localStorage.setItem("USER_LOGIN", JSON.stringify(action.payload));
        })
        .addCase(themPhimUploadHinh.rejected, (state, action) => {
          state.error = action.payload;

          state.isFetching = false;
          Swal.fire({
            icon: "error",
            title: "Thất bại...",
            text: action.payload.content,
            footer: '<a href="">Xin cảm ơn</a>',
          });
        });
    },
  });

export const getMovieList = createAsyncThunk(
  "quanLyPhim/getMovieList",
  async (data, { dispatch, getState, rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP13",
        method: "GET",
        headers: {
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
      });
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.respone.data);
    }
  }
);

export const getCarouselList = createAsyncThunk(
  "quanLyPhim/getCarouselList",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
        method: "GET",
        headers: {
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
      });
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.respone.data);
    }
  }
);

export const getCinemaList = createAsyncThunk(
  "quanLyPhim/getCinameList",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP13",
        method: "GET",
        headers: {
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
      });
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const themPhimUploadHinh = createAsyncThunk(
  "quanLyPhim/themPhimUploadHinh",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
        method: "POST",
        headers: {
          TokenCyberSoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY",
        },
        data,
      });
      console.log("cong cong");
      return result.data.content;
    } catch (err) {
      console.log(data);
      console.log("error: ", err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);
