import React from 'react';
import { Input } from './styles';

export default function SearchInput(props) {
  return (
    <Input
      placeholder="Digite o nome do personagem"
      onChange={props.onChange}
    />
  );
}
