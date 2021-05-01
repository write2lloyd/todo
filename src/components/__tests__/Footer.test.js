import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';

it('renders without crashing', () => {
 const div = document.createElement("div");
 ReactDOM.render(<Footer/>, div);
});

it('renders footer correctly', () => {
  const { getByTestId } = render(<Footer />);
  expect(getByTestId('footer')).toHaveTextContent('© 2021 TaskRunner Inc. All rights reserved.');
});