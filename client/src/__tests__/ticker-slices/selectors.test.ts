import {
  selectLastTradeTime,
  selectTicker,
  selectTickers,
  selectTickersHistory,
} from '../../slices/tickers';
import { SAMPLE_DATA, TICKER_SAMPLE_DATA } from '../../constants';
import { TickerState } from '../../types/ticker-state';

describe('Selectors', () => {
  const mockRootState: TickerState = {
    tickers: {
      tickers: [TICKER_SAMPLE_DATA],
      tickersHistory: SAMPLE_DATA,
      isLoading: false,
      error: null,
    },
  };

  it('should select tickers from the state', () => {
    const selectedTickers = selectTickers(mockRootState);
    expect(selectedTickers).toEqual([TICKER_SAMPLE_DATA]);
  });

  it('should select tickers history from the state', () => {
    const selectedTickersHistory = selectTickersHistory(mockRootState);

    expect(selectedTickersHistory).toEqual(SAMPLE_DATA);
  });

  it('should select ticker by filtering tickers history', () => {
    const expectedTicker = TICKER_SAMPLE_DATA;

    const selectedTicker = selectTicker(expectedTicker.ticker)(mockRootState);

    expect(selectedTicker).toEqual([expectedTicker]);
  });

  it('should select the last trade time for a ticker', () => {
    const selectedLastTradeTime = selectLastTradeTime(SAMPLE_DATA[0].ticker)(
      mockRootState
    );

    expect(selectedLastTradeTime).toMatch(/^\d{2}:\d{2}:\d{2}$/);
  });
});
