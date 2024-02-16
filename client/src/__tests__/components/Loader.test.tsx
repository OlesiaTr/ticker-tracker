import { render, screen } from '@testing-library/react';

import { Loader } from '../../components/loader';

test('renders Loader component', () => {
  render(<Loader />);

  const loader = screen.getByLabelText('rings-loading');
  expect(loader).toBeInTheDocument();
  expect(loader).toBeVisible();
});
