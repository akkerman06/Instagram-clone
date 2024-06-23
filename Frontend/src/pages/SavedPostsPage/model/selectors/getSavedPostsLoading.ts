import { StateSchema } from "@/app/provider";

export const getSavedPostsLoading = (state: StateSchema) =>
  state.savedPosts.loading || false;
