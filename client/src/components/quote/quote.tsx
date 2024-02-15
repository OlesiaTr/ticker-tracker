import { FC } from 'react';
import { QuoteCard } from '../quote-card';
import { QuoteList } from './quote.styled';
import { useSelector } from 'react-redux';
import { selectTickers } from '../../slices/tickers';

export interface Props {
  onTickerClick: (ticker: string) => void;
}

const Quote: FC<Props> = ({ onTickerClick }) => {
  const quotes = useSelector(selectTickers);

  return (
    <QuoteList>
      {quotes.length > 0 &&
        quotes.map(quote => (
          <QuoteCard
            onTickerClick={onTickerClick}
            key={quote.ticker}
            quote={quote}
          />
        ))}
    </QuoteList>
  );
};

export default Quote;
