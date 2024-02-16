import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useTickerSubscription } from '../../service/socket';
import { fetchTickersSuccess, selectLastTradeTime } from '../../slices/tickers';
import { THE_TICKER_ON_LOAD } from '../../constants';

import { Quote } from '../../components/quote';
import { Chart } from '../../components/chart';
import { Loader } from '../../components/loader';
import { StyledSelect } from '../../components/select-input';

const App = () => {
  const [selectedTicker, setSelectedTicker] =
    useState<string>(THE_TICKER_ON_LOAD);
  const [isLoading, setIsLoading] = useState(true);
  const tickerTradeTime = useSelector(selectLastTradeTime(selectedTicker));
  const dispatch = useDispatch();

  useTickerSubscription(tickers => {
    if (isLoading) {
      dispatch(fetchTickersSuccess(tickers));
      setIsLoading(false);
    }
  });

  const handleTickerClick = (ticker: string) => setSelectedTicker(ticker);

  if (isLoading) return <Loader />;

  return (
    <main>
      <h1 style={{ visibility: 'hidden' }}>Ticker Tracker</h1>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>
        Last time trade: {tickerTradeTime}
      </h2>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <StyledSelect />

        <Quote onTickerClick={handleTickerClick} />

        <Chart selectedTicker={selectedTicker} />
      </div>
    </main>
  );
};

export default App;
