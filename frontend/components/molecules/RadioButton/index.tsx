import * as React from 'react';
import styled from 'styled-components';
import colors from '@frontend/components/styles/colors';

const Container = styled.label`
  display: inline-block;
  margin-bottom: 8px;
  cursor: pointer;
`;

const Input = styled.input`
  opacity: 0;
  -moz-opacity: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;

  + span {
    display: block;
    position: relative;
    line-height: 28px;
    cursor: pointer;
    padding-left: 32px;
    margin-left: 8px;
    font-weight: normal;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 24px;
      height: 24px;
      border: 1px solid ${colors.gray};
      border-radius: 50%;
    }
  }

  &:checked + span {
    &::before {
      content: '';
      display: block;
      position: absolute;
      border-radius: 50%;
      top: 0px;
      left: 0px;
      width: 24px;
      height: 24px;
      background-color: ${colors.blue};
      border: 1px solid ${colors.blue};
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      border-radius: 50%;
      top: 8px;
      left: 8px;
      width: 8px;
      height: 8px;
      background-color: ${colors.white};
      border: 1px solid ${colors.blue};
    }
  }

  &:focus {
    & + label {
      &::before {
        content: '';
        display: block;
        position: absolute;
        border-radius: 50%;
        top: 0px;
        left: 0px;
        width: 24px;
        height: 24px;
        border: 1px solid ${colors.blue};
        box-shadow: 0 0 6px ${colors.blue}, 0 0 8px ${colors.blue};
      }
    }
  }
`;

type Props = {
  name: string;
  label: string;
  value: string;
  onClick: (age: string) => void;
  checked?: boolean;
};

const RadioButton: React.FC<Props> = ({
  name,
  label,
  value,
  onClick,
  checked = false,
}) => {
  return (
    <Container htmlFor={`radio-${name}-${value}`}>
      <Input
        type="radio"
        id={`radio-${name}-${value}`}
        name={name}
        value={value}
        onClick={() => onClick(value)}
        defaultChecked={checked}
      />
      <span>{label}</span>
    </Container>
  );
};

export default RadioButton;
