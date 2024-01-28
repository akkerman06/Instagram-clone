import { ThunkConfig } from "@/app/provider";
import { userActions } from "@/entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "@/entities/User/model/types/user";
import { LOCAL_STORAGE_TOKEN } from "@/shared/consts/LocalStorage";

interface GetFethLoginData {
    user: User
    token:  ''
}

export const getFetchAuthUser = createAsyncThunk<any , void , ThunkConfig<string>>('user/getAuthUser' ,
 async (_ , thunkApi) => {
    const { rejectWithValue , dispatch , extra} = thunkApi

    
    try{
        const res = await extra.api.post<GetFethLoginData>('/refresh_token')



        if(res.data) {
            dispatch(userActions.setAuthData(res.data))
            localStorage.setItem(LOCAL_STORAGE_TOKEN , res.data.token)
        }

        console.log(res)
    } catch(err: any){
        console.log(err.response.data.msg)
        return rejectWithValue(err.response.data.msg)
     }

})