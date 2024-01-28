import { StateSchema } from "@/app/provider/StoreProvider/config/StateSchema";


export const getAuthError = (state: StateSchema) => state.auth.error || ''