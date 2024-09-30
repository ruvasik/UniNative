import React from 'react';

import { Button as PaperButton } from 'react-native-paper';

export interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <PaperButton mode="contained" onPress={onPress}>
      {title}
    </PaperButton>
  );
};
