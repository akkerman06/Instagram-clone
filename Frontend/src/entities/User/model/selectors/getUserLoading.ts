import { StateSchema } from "@/app/provider/StoreProvider/config/StateSchema";


export const getUserLoading = (state: StateSchema) => state.user.loading || false