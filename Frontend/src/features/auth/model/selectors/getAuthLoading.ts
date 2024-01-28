import { StateSchema } from "@/app/provider/StoreProvider/config/StateSchema";


export const getAuthLoading = (state: StateSchema) => state.auth.loading || false