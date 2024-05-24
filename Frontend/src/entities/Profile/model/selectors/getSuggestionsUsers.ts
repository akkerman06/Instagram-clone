import { StateSchema } from "@/app/provider";

export const getSuggestionsUsers = (state: StateSchema) =>
  state.profile.suggestionsUsers || [];
