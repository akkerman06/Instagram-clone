import { StateSchema } from "@/app/provider";

export const getUserPostInited = (state: StateSchema) =>
  state.profile.inited || false;
