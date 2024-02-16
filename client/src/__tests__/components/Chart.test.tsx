import { useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';

import { Chart } from '../../components/chart';
import { CHART_SAMPLE_DATA } from '../../constants/sample-datas';

global.ResizeObserver = require('resize-observer-polyfill');

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

test('renders Chart component', () => {
  (useSelector as unknown as jest.Mock).mockReturnValue(CHART_SAMPLE_DATA);
  render(<Chart selectedTicker="AAPL" />);

  const section = screen.getByTestId('chart-section');
  expect(section).toBeInTheDocument();
  expect(section).toBeVisible();
});
