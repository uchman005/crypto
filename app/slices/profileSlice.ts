import { TUser } from '../../interfaces/index';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import Cookies from 'universal-cookie';
import { Schema } from 'mongoose';

const cookies = new Cookies();
export const storedToken = cookies.get('token') as Schema.Types.ObjectId;

const initialState: TUser = {
    loading: false,
    token: storedToken, // for storing the _id of
    firstname: '',
    lastname: '',
    email: '',
    error: '',
    usd: 0,
    btc: '0',
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setFirstname: (state, action: PayloadAction<string>) => {
            state.firstname = action.payload;
        },
        setLastname: (state, action: PayloadAction<string>) => {
            state.firstname = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.firstname = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
});

//Export all states to access from consumer components
export const userToken = (state: RootState) => state.iprofile.token;
export const isLoading = (state: RootState) => state.iprofile.loading;
export const userFirstname = (state: RootState) => state.iprofile.firstname;
export const userLastname = (state: RootState) => state.iprofile.lastname;
export const userEmail = (state: RootState) => state.iprofile.email;
export const userError = (state: RootState) => state.iprofile.error;
export const userBTC = (state: RootState) => state.iprofile.btc;
export const userUSD = (state: RootState) => state.iprofile.usd;

//Export all actions
export const { setLoading, setFirstname, setLastname, setEmail, setError } = profileSlice.actions;
export default profileSlice.reducer;
