import { useRef } from 'react';

import { socket } from '../../config';
import { TickerData } from '../../types';

export const useTickerSubscription = (cb: (tickers: TickerData[]) => void) => {
  const isSubscribedRef = useRef<boolean>(false);

  const handleTickerEvent = (tickers: TickerData[]) => cb(tickers);

  const handleError = (error: unknown) => {
    console.error('Socket error:', error);
  };

  if (!isSubscribedRef.current) {
    socket.on('ticker', handleTickerEvent);
    socket.on('error', handleError);
    socket.emit('start');

    isSubscribedRef.current = true;
  }

  return () => {
    socket.off('ticker', handleTickerEvent);
    socket.off('error', handleError);
  };
};
