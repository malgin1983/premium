import { createReducer } from '@reduxjs/toolkit';

export interface ICounterState {
    isLoading: boolean;
    data: any;
    errors: any;
}

export const initialStateCounter: ICounterState = {
    isLoading: true,
    data: null,
    errors: null,
};

export const counterReducer = createReducer(initialStateCounter, {
    GET_COUNTER: () => ({ ...initialStateCounter, isLoading: true }),
    GET_COUNTER_FAIL: () => ({ ...initialStateCounter, isLoading: false }),
    GET_COUNTER_SUCCESS: (state, action) => ({ ...state, data: state.data + action.data, isLoading: false }),
});

export default counterReducer;