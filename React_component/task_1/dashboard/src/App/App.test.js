import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

jest.spyOn(window, 'alert').mockImplementation(() => {});

afterEach(() => {
  jest.clearAllMocks();
});

test('call logOut function and display alert when pressing control+h', () => {
  const logOutMock = jest.fn();
  const { container } = render(<App isLoggedIn={true} logOut={logOutMock} />);

  fireEvent.keyDown(container, { key: 'h', ctrlKey: true });

  expect(window.alert).toHaveBeenCalledWith('Logging you out');
  expect(logOutMock).toHaveBeenCalled();
});
