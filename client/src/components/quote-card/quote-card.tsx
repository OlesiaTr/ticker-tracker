import { FC } from 'react';

import { TickerData } from '../../types';
import { ArrowDown, ArrowUp } from '../../assets/icons';

import {
  AdditionalInfo,
  Change,
  ChangePercent,
  Exchange,
  Price,
  PriceInfo,
  Ticker,
  TickerBody,
  TickerCard,
  TickerHeader,
} from './quote-card.styled';

interface Props {
  quote: TickerData;
  onTickerClick: (ticker: string) => void;
}

const QuoteCard: FC<Props> = ({ quote, onTickerClick }) => {
  const { ticker, price, change, change_percent, exchange } = quote;

  const isProfitable = change_percent > 0.5;

  return (
    <TickerCard onClick={() => onTickerClick(ticker)}>
      <TickerHeader>
        <Ticker>{ticker}</Ticker>
        <Exchange>{exchange}</Exchange>
      </TickerHeader>
      <TickerBody>
        <AdditionalInfo>
          <Change>{change}</Change>
          <ChangePercent $isProfitable={isProfitable}>
            {isProfitable ? (
              <ArrowUp testId="arrow-up" />
            ) : (
              <ArrowDown testId="arrow-down" />
            )}
            {change_percent}
          </ChangePercent>
        </AdditionalInfo>
        <PriceInfo>
          <Price>$ {price}</Price>
        </PriceInfo>
      </TickerBody>
    </TickerCard>
  );
};

export default QuoteCard;
