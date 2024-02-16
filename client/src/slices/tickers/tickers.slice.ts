import { createSlice } from '@reduxjs/toolkit';
import { TickerState } from '../../types';

export const initialState: TickerState = {
  tickers: [],
  tickersHistory: [],
  isLoading: false,
  error: null,
};

const tickersSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    fetchTickersSuccess: (state, action) => {
      state.tickers = action.payload;
      state.tickersHistory.push(...action.payload);
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { fetchTickersSuccess } = tickersSlice.actions;
export const tickersReducer = tickersSlice.reducer;
