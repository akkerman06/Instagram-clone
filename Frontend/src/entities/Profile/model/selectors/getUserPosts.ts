import { StateSchema } from "@/app/provider";

export const getProfilePosts = (state: StateSchema) =>
  state.profile.posts || null;
