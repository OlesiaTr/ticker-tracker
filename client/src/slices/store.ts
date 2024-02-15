import { configureStore } from '@reduxjs/toolkit';
import { tickersReducer } from './tickers';

const rootReducer = {
  tickers: tickersReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
