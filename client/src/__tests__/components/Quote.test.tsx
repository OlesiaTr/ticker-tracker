import { render, screen, fireEvent } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Quote } from '../../components/quote';
import { SAMPLE_DATA } from '../../constants/sample-datas';

const mockStore = configureStore();

const store = mockStore(SAMPLE_DATA);

const mockOnTickerClick = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Quote Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component with quotes', () => {
    (useSelector as unknown as jest.Mock).mockReturnValue(SAMPLE_DATA);

    render(
      <Provider store={store}>
        <Quote onTickerClick={mockOnTickerClick} />
      </Provider>
    );

    expect(screen.getByText('AAPL')).toBeInTheDocument();
    expect(screen.getByText('GOOGL')).toBeInTheDocument();
  });

  // TODO
  // it('renders the component without quotes', () => {
  //   // Mock the useSelector to return an empty list of quotes
  //   (useSelector as unknown as jest.Mock).mockReturnValue([]);

  //   render(
  //     <Provider store={store}>
  //       <Quote onTickerClick={mockOnTickerClick} />
  //     </Provider>
  //   );

  //   // Assert that a message for no quotes is rendered
  //   expect(screen.getByText('No quotes available.')).toBeInTheDocument();
  // });

  it('calls onTickerClick when a quote is clicked', () => {
    (useSelector as unknown as jest.Mock).mockReturnValue(SAMPLE_DATA);

    render(
      <Provider store={store}>
        <Quote onTickerClick={mockOnTickerClick} />
      </Provider>
    );

    fireEvent.click(screen.getByText('AAPL'));

    expect(mockOnTickerClick).toHaveBeenCalledWith('AAPL');
  });
});
