import { Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { authReducer } from '@/features/auth'
import { userReducer } from '@/entities/User'
import { $api } from '@/shared/api'

export const createStore = () => {

    const rootReducer: ReducersMapObject<StateSchema> = {
        auth: authReducer,
        user: userReducer
    }

    const extraArg: ThunkExtraArg = {
        api: $api,
    } 

    const store = configureStore({
        reducer: rootReducer,
        devTools: DEV,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg
                }
            })
    })

    return store
}

export type AppDispatch = ReturnType<typeof createStore>["dispatch"];
