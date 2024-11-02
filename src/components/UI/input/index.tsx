import React from 'react';
import { InputProps } from './Input.interface';

const Input = (props: InputProps) => {
  const { type } = props;
  return (
    <>{type === 'textarea' ? <textarea {...props} /> : <input {...props} />}</>
  );
};

export default Input;
