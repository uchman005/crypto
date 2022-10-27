import { TUser } from '../../interfaces/index';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import Cookies from 'universal-cookie';
import { Schema } from 'mongoose';

const cookies = new Cookies();
export const storedToken = cookies.get('token') as Schema.Types.ObjectId;

interface OUser {
    userinfo: object;
}

const initialState: OUser = {
    userinfo: {},
};

export const userSlice = createSlice({
    name: 'userEmail',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<object>) => {
            state.userinfo = action.payload;
        },
    },
});

//Export all states to access from consumer components
export const userInfo = (state: RootState) => state.iuser;

//Export all actions
export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
