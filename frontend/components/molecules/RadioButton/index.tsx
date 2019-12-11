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

  & + span {
    vertical-align: middle;
    display: inline-block;
    border: 1px solid ${colors.gray};
    box-sizing: border-box;
    background-color: ${colors.white};
    top: 0px;
    left: 0px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  &:checked + span {
    position: relative;
    background-color: ${colors.blue};
    border: 2px solid ${colors.blue};

    &:after {
      content: '';
      display: block;
      position: absolute;
      border-radius: 50%;
      top: 4px;
      left: 4px;
      width: 10px;
      height: 10px;
      background-color: ${colors.white};
      border: 1px solid ${colors.blue};
    }
  }

  &:focus {
    & + span {
      vertical-align: middle;
      display: inline-block;
      border: 1px solid ${colors.gray};
      box-sizing: border-box;
      background-color: ${colors.white};
      top: 0px;
      left: 0px;
      width: 24px;
      height: 24px;
      border-radius: 50%;

      border: 1px solid ${colors.blue};
      box-shadow: 0 0 6px ${colors.blue}, 0 0 8px ${colors.blue};
    }

    &:checked + span {
      position: relative;
      background-color: ${colors.blue};
      border: 2px solid ${colors.blue};

      &:after {
        content: '';
        display: block;
        position: absolute;
        border-radius: 50%;
        top: 4px;
        left: 4px;
        width: 10px;
        height: 10px;
        background-color: ${colors.white};
        border: 1px solid ${colors.blue};
      }
    }
  }
`;

const Label = styled.span`
  position: relative;
  vertical-align: middle;
  margin-left: 8px;
`;

type Props = {
  name: string;
  label: string;
  value: string;
  checked: boolean;
  onClick: (age: string) => void;
};

const RadioButton: React.FC<Props> = ({
  name,
  label,
  value,
  checked,
  onClick,
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
      <span />
      <Label>{label}</Label>
    </Container>
  );
};

export default RadioButton;
