import { StateSchema } from "@/app/provider";

export const getSavedPostsSelector = (state: StateSchema) =>
  state.savedPosts.posts || [];
