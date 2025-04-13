import { TextInput, TextInputProps } from 'react-native';
import { Input } from './styles';
import React from 'react';

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export default function InputText({ inputRef, ...rest }: Props) {
  return (
    <Input
      ref={inputRef}
      {...rest}
    />
  );
}