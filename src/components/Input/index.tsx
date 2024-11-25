import { TextInputProps } from 'react-native';
import { Input } from './styles';

export default function InputText(prop: TextInputProps) {
  return (
    <Input {...prop} />
  );
}