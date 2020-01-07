import React from 'react';
import ReactDOM from 'react-dom';
import { render, getByTestId } from '@testing-library/react';
import Form from '../components/Form';

describe('Form', () => {

  it('Should render the form without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form />, div);
  });

  it('renders the correct fields', () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId('age-test')).toBeVisible();
    expect(getByTestId('weight-test')).toBeVisible();
    expect(getByTestId('height-test')).toBeVisible();
    expect(getByTestId('activity-test')).toBeVisible();
    expect(getByTestId('bodyfat-test')).toBeVisible();
  });
});
