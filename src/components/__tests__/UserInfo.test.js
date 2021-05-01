import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserInfo from '../UserInfo';

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserInfo />, div);
});

it('renders UserInfo with 2 children', () => {
  const { getByTestId } = render(<UserInfo />);
  expect(getByTestId('userInfo').children.length).toEqual(2);
});

it('renders UserInfo with a picture and name', () => {
  const user = {
    picture: 'https://picsum.photos/200',
    name: 'Rafael Dsouza',
  };
  const { getByTestId } = render(<UserInfo user={user} />);
  expect(getByTestId('avatar').children[0].src).toEqual('https://picsum.photos/200');
  expect(getByTestId('name').textContent).toEqual('Rafael Dsouza');
})


