import { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export interface TokenState {
    token?: string;
}

const initialState: TokenState = {
    token: cookies.get('token'),
};

export const tokenSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
    },
});

export const { setToken } = tokenSlice.actions;

const tokenSelector = (state: RootState) => state.itoken.token;

export default tokenSlice.reducer;
