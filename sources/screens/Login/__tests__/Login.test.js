import React from 'react';

import '@testing-library/jest-native/extend-expect';
import {render, fireEvent, waitFor} from '@testing-library/react-native';

import Login from '../';

describe('Login', () => {
  it('should disable the button when one or more inputs are still not filled', async () => {
    const {getByTestId} = render(<Login />);

    const usernameInput = getByTestId('username-input');
    const passwordInput = getByTestId('password-input');

    const loginButton = getByTestId('login-button');

    expect(loginButton.props.accessibilityState.disabled).toBe(true);

    fireEvent.changeText(usernameInput, 'Joe');
    fireEvent.changeText(passwordInput, '123456');

    await waitFor(() => {
      expect(loginButton.props.accessibilityState.disabled).toBe(false);
    });
  });
});
