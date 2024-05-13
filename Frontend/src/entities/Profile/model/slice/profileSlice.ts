import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "../types/profile";
import { searchUsers } from "../service/searchUsers";
import { getUserProfile } from "../service/getUserProfile";
import { updateProfile } from "../service/updateProfile";
import { getUserPosts } from "../service/getUserPosts";
import { GetFetchPosts } from "@/pages/HomePage/model/service/getFetchPosts";
import { Post } from "@/entities/PostCard";

const initialState: ProfileState = {
  posts: [],
  lengthUserPosts: 0,
  users: [],
  user: null,
  loading: false,
  loadingPosts: false,
  succes: "",
  error: "",
  searchUsers: [],
  searchLoading: false,
  inited: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileUser: (state, action) => {
      state.user = action.payload;
    },
    setSearchUsers: (state) => {
      state.searchUsers = [];
    },
    setUpdateProfilePost: (state, action: PayloadAction<Post>) => {
      state.posts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    },

    // setUserPosts: (state, action) => {
    //   state.posts = action.payload;
    // },

    setClearMessage: (state) => {
      state.error = "";
      state.succes = "";
    },
    setUpdateFollow: (state, action) => {
      state.users = state.users.map((user) =>
        user._id === action.payload._id ? action.payload : user
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(searchUsers.pending, (state) => {
        state.searchLoading = true;
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        (state.searchLoading = false), (state.searchUsers = action.payload);
      })
      .addCase(searchUsers.rejected, (state) => {
        state.searchLoading = false;
      })
      //------------------------------------------------------------------
      .addCase(getUserProfile.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.users = [...state.users, action.payload.user];
      })
      //------------------------------------------------------------------
      .addCase(getUserPosts.pending, (state) => {
        state.loadingPosts = true;
      })
      .addCase(
        getUserPosts.fulfilled,
        (state, action: PayloadAction<GetFetchPosts>) => {
          state.loadingPosts = false;
          state.posts = action.payload.posts;
          state.lengthUserPosts = action.payload.result;
          state.inited = true;
        }
      )
      .addCase(getUserPosts.rejected, (state) => {
        state.loadingPosts = false;
      })
      //------------------------------------------------------------------
      .addCase(updateProfile.pending, (state, action) => {
        (state.error = ""), (state.succes = "");
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        (state.error = ""), (state.succes = "Профиль успешно обновлен");
      })
      .addCase(updateProfile.rejected, (state, action) => {
        (state.error = "Ошибка при обновлении профиля"), (state.succes = "");
      });
  },
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
