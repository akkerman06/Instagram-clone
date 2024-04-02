import { StateSchema } from "@/app/provider";

export const getPostsInited = (state: StateSchema) =>
  state.post.inited || false;
