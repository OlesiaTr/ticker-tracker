import { render, screen, fireEvent } from '@testing-library/react';
import { TICKER_SAMPLE_DATA } from '../../constants/sample-datas';
import { QuoteCard } from '../../components/quote-card';

const mockOnTickerClick = jest.fn();

describe('QuoteCard Component', () => {
  it('renders the component with correct data', () => {
    render(
      <QuoteCard quote={TICKER_SAMPLE_DATA} onTickerClick={mockOnTickerClick} />
    );

    expect(screen.getByText('AAPL')).toBeInTheDocument();
    expect(screen.getByText('NASDAQ')).toBeInTheDocument();
    expect(screen.getByText('$ 279.29')).toBeInTheDocument();
    expect(screen.getByText('64.52')).toBeInTheDocument();
    expect(screen.getByText('0.84')).toBeInTheDocument();
  });

  it('calls onTickerClick when the card is clicked', () => {
    render(
      <QuoteCard quote={TICKER_SAMPLE_DATA} onTickerClick={mockOnTickerClick} />
    );

    fireEvent.click(screen.getByText('AAPL'));

    expect(mockOnTickerClick).toHaveBeenCalledWith('AAPL');
  });

  it('displays an up arrow for profitable changes', () => {
    render(
      <QuoteCard
        quote={{ ...TICKER_SAMPLE_DATA, change_percent: 1.0 }}
        onTickerClick={mockOnTickerClick}
      />
    );

    expect(screen.getByTestId('arrow-up')).toBeInTheDocument();
  });

  it('displays a down arrow for unprofitable changes', () => {
    render(
      <QuoteCard
        quote={{ ...TICKER_SAMPLE_DATA, change_percent: -1.0 }}
        onTickerClick={mockOnTickerClick}
      />
    );

    expect(screen.getByTestId('arrow-down')).toBeInTheDocument();
  });
});
