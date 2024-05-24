import { ThunkConfig } from "@/app/provider";
import { Post } from "@/entities/PostCard";
import { profileActions } from "@/entities/Profile";
import { User } from "@/entities/User/model/types/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { profile } from "console";

export const getSuggestions = createAsyncThunk<any, void, ThunkConfig<string>>(
  "suggestions/getSuggestions",
  async (_, thunkApi) => {
    const { extra, rejectWithValue, dispatch } = thunkApi;
    try {
      const { data } = await extra.api.get("/suggestionsUser");
      dispatch(profileActions.setSuggestionsUsers(data.users));
      return data;
    } catch (e) {
      return rejectWithValue(e.responce.data.msg);
    }
  }
);
