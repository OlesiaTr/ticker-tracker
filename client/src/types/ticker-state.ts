import { TickerData } from '.';

export interface TickerState {
  tickers: TickerData[];
  tickersHistory: TickerData[];
  isLoading: boolean;
  error: unknown;
}
