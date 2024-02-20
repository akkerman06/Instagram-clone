import { ThunkConfig } from "@/app/provider";
import { userActions } from "@/entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "@/entities/User/model/types/user";
import { LOCAL_STORAGE_TOKEN } from "@/shared/consts/LocalStorage";

interface SearchUsersParams {
    search: string
}

interface GetFetchSearchUsers {
    users: User
}

export const searchUsers = createAsyncThunk<any , SearchUsersParams , ThunkConfig<string>>('profile/searchUsers' ,
 async ({search}, thunkApi) => {
    const { rejectWithValue  , extra} = thunkApi
    
    try{
        const res = await extra.api.get<GetFetchSearchUsers>(`/search?username=${search}`)
        
        return res.data.users
    } catch(err: any){
        return rejectWithValue(err.response.data.msg)
     }

})