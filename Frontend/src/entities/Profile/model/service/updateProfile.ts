import { ThunkConfig } from "@/app/provider";
import { userActions } from "@/entities/User";
import { User } from "@/entities/User/model/types/user";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface UpdateProfileParams{
    user: User
    avatar: File
}

export const updateProfile = createAsyncThunk<any , UpdateProfileParams , ThunkConfig<string>>('profile/updateProfile' ,
 async (params, thunkApi) => {
    const { rejectWithValue  , extra , dispatch} = thunkApi
    const {user , avatar} = params
    try{
        const res = await extra.api.patch(`/user` , user)
        if(res.data){
            dispatch(userActions.setUpdateUser(user))
        }
    } catch(err: any){
        return rejectWithValue(err.response.data.msg)
     }

})