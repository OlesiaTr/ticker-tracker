import { SAMPLE_DATA } from '../../constants';
import { fetchTickersSuccess, tickersReducer } from '../../slices/tickers';

describe('tickersReducer', () => {
  it('should handle fetchTickersSuccess action', () => {
    const initialState = {
      tickers: [],
      tickersHistory: [],
      isLoading: false,
      error: null,
    };

    const action = fetchTickersSuccess(SAMPLE_DATA);

    const nextState = tickersReducer(initialState, action);

    expect(nextState.tickers).toEqual(SAMPLE_DATA);
    expect(nextState.tickersHistory).toEqual([
      ...initialState.tickersHistory,
      ...SAMPLE_DATA,
    ]);
    expect(nextState.isLoading).toBe(false);
    expect(nextState.error).toBe(null);
  });
});
