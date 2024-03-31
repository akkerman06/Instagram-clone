import { StateSchema } from "@/app/provider";

export const getDataPosts = (state: StateSchema) => state.post.posts || [];
