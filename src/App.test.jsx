import React from "react";
import { render } from '@testing-library/react';
import { expect, it, describe } from 'vitest';
import App from './App';

describe('App', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});

