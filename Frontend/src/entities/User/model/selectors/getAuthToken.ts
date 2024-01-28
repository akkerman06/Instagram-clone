import { StateSchema } from "@/app/provider/StoreProvider/config/StateSchema";


export const getAuthToken = (state: StateSchema) =>  state.user.token || ''