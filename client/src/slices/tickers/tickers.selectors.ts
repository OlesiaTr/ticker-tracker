import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectTickers = (state: RootState) => state.tickers.tickers;
export const selectTickersHistory = (state: RootState) =>
  state.tickers.tickersHistory;

export const selectTicker = (ticker: string) =>
  createSelector(selectTickersHistory, historyTickers =>
    historyTickers.filter(historyTicker => historyTicker.ticker === ticker)
  );

export const selectLastTradeTime = (ticker: string) =>
  createSelector(selectTickers, newTickers => {
    const filteredTickers = newTickers.filter(
      newTicker => newTicker.ticker === ticker
    );

    if (filteredTickers.length > 0) {
      const lastTicker = filteredTickers[filteredTickers.length - 1];
      return new Date(lastTicker.last_trade_time).toLocaleTimeString();
    }

    return null;
  });
