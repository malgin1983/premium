import { configureStore, getDefaultMiddleware, ThunkAction, Action } from '@reduxjs/toolkit';

import { rootReducer } from './rootReducer';
import { useDispatch } from 'react-redux';

const middleware = [...getDefaultMiddleware({ serializableCheck: false, immutableCheck: false })];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;
// @ts-ignore
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >
