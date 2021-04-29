import { createAsyncThunk } from '@reduxjs/toolkit'
import {AppThunk} from "../../store/store";

export const getTracksStart = ()=> ({ type: 'GET_COUNTER'});
export const getTracksSuccess = (data: number)=> ({ type: 'GET_COUNTER_SUCCESS', data});
export const getTracksError = ()=> ({ type: 'GET_COUNTER_FAIL'});

export async function fetchCount(amount = 1): Promise<{ data: number }> {
    const response = await fetch('/api/counter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
    })
    const result = await response.json()
    return result
}

export const getTracks = createAsyncThunk(
    'counters/fetchCount',
    async (amount: number) => {
        const response = await fetchCount(amount)
        return response.data
    }
)

export const incrementPlus = (count: number): AppThunk => (
    dispatch,
) => {
   dispatch(getTracksStart())
    try {
        getTracks(1)
        dispatch(getTracksSuccess(count))
    } catch (e){
        dispatch(getTracksError())
    }
}


