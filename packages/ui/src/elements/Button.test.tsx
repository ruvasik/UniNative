import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';

import { Button } from './Button';

describe('Button', () => {
  it('renders with correct text', () => {
    const { getByText } = render(<Button title="Click me" onPress={() => {}} />); // Используем title и onPress
    expect(getByText('Click me')).toBeTruthy(); // Проверяем, что текст рендерится
  });

  it('calls onPress when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button title="Click me" onPress={handleClick} />); // Передаём mock функцию
    fireEvent.press(getByText('Click me')); // Используем fireEvent для симуляции нажатия
    expect(handleClick).toHaveBeenCalledTimes(1); // Проверяем, что обработчик вызван один раз
  });
});
