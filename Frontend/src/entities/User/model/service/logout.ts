import { ThunkConfig } from "@/app/provider";
import { userActions } from "@/entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "@/entities/User/model/types/user";
import { LOCAL_STORAGE_TOKEN } from "@/shared/consts/LocalStorage";

interface GetFethLoginData {
    user: User
    token:  ''
}

export const logout = createAsyncThunk<any , void , ThunkConfig<string>>('user/logout' ,
 async (_ , thunkApi) => {
    const { rejectWithValue  , extra} = thunkApi

    
    try{
        const res = await extra.api.post('/logout')



        if(res.data) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN)
            window.location.href = '/'
        }

        console.log(res)
    } catch(err: any){
        return rejectWithValue(err.response.data.msg)
     }

})