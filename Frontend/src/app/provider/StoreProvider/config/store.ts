import { Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { authReducer } from '@/features/auth'

export const createStore = () => {

    const rootReducer: ReducersMapObject<StateSchema> = {
        auth: authReducer
    }

    const store = configureStore({
        reducer: rootReducer,
    })

    return store
}

export type AppDispatch = ReturnType<typeof createStore>["dispatch"];