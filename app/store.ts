import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './slices/tokenSlice';
import profileReducer from './slices/profileSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        itoken: tokenReducer,
        iprofile: profileReducer,
        iuser: userReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
