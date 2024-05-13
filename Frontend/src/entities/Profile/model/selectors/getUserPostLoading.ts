import { StateSchema } from "@/app/provider";

export const getUserPostLoading = (state: StateSchema) =>
  state.profile.loadingPosts || false;
