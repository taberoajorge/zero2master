import { render } from "@testing-library/react";
import React from 'react'
import App from "../App";

describe('Pruebas con app', () => {

  test('should return message', () => {

    const greeting = 'holi';
    const number = 1;
    const { getByText } = render(<App saludo={greeting} other={number} />);

    expect(getByText(greeting)).toBeInTheDocument();

  })

})