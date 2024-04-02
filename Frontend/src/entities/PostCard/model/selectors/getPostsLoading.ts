import { StateSchema } from "@/app/provider";

export const getPostsLoading = (state: StateSchema) =>
  state.post.loading || false;
