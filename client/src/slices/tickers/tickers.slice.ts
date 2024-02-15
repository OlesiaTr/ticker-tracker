import { createSlice } from '@reduxjs/toolkit';
import { TickerData } from '../../types';

interface State {
  tickers: TickerData[];
  tickersHistory: TickerData[];
  isLoading: boolean;
  error: unknown;
}

export const initialState: State = {
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
